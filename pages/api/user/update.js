import SHA256 from "crypto-js/sha256";
import encBase64 from "crypto-js/enc-base64";
import uid2 from "uid2";
import dbConnect from "../../../lib/dbConnect";
import User from "../../../lib/models/User";
import isAuthenticated from "../../../lib/isAuthenticated";
import parseForm from "../../../lib/parseForm";

export const config = { api: { bodyParser: false } };

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method not allowed" });
    }

    try {
        await dbConnect();
        const { fields } = await parseForm(req);

        const authorized = await isAuthenticated(fields.token);
        if (!authorized) {
            return res.status(401).json({ error: "Unauthorized" });
        }

        const user = await User.findOne({ token: fields.token });

        if (fields.name !== "") {
            user.name = fields.name;
        }
        if (fields.password !== "") {
            const password = fields.password;
            const salt = uid2(16);
            const hash = SHA256(password + salt).toString(encBase64);
            const token = uid2(16);
            user.token = token;
            user.hash = hash;
            user.salt = salt;
        }
        await user.save();
        res.status(200).json({ message: "modified user", user });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}
