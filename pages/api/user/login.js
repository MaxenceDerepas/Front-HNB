import SHA256 from "crypto-js/sha256";
import encBase64 from "crypto-js/enc-base64";
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

        const user = await User.findOne({ name: fields.name });
        if (user) {
            if (
                SHA256(fields.password + user.salt).toString(encBase64) ===
                user.hash
            ) {
                res.status(200).json({
                    _id: user._id,
                    token: user.token,
                    name: user.name,
                });
            } else {
                res.status(401).json({ error: "Unauthorized" });
            }
        } else {
            res.status(400).json({ message: "User not found" });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}
