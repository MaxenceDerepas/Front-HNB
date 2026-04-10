import dbConnect from "../../../lib/dbConnect";
import Testimony from "../../../lib/models/Testimony";
import parseForm from "../../../lib/parseForm";

export const config = { api: { bodyParser: false } };

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method not allowed" });
    }

    try {
        await dbConnect();
        const { fields } = await parseForm(req);

        for (let i = 0; i < fields.data.length; i++) {
            const testimony = await Testimony.findById(fields.data[i]._id);
            testimony.text = [];
            testimony.text = fields.data[i].text;
            await testimony.save();
        }

        res.status(200).json("data save");
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}
