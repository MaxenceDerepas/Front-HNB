import SHA256 from "crypto-js/sha256";
import encBase64 from "crypto-js/enc-base64";
import uid2 from "uid2";
import dbConnect from "../../../lib/dbConnect";
import User from "../../../lib/models/User";
import parseForm from "../../../lib/parseForm";

export const config = { api: { bodyParser: false } };

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method not allowed" });
    }

    try {
        await dbConnect();
        const { fields } = await parseForm(req);

        if (fields.password && fields.name) {
            const password = fields.password;
            const salt = uid2(16);
            const hash = SHA256(password + salt).toString(encBase64);
            const token = uid2(16);

            const newUser = new User({
                name: fields.name,
                token: token,
                hash: hash,
                salt: salt,
            });

            await newUser.save();

            res.status(200).json({
                _id: newUser._id,
                token: newUser.token,
                name: newUser.name,
            });
        } else {
            res.status(200).json({
                message: "veuillez remplir tous les champs",
            });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}
