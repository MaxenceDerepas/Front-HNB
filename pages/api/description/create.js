import dbConnect from "../../../lib/dbConnect";
import Description from "../../../lib/models/Description";
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
            const newDescription = new Description({
                page: fields.data[i].page,
                description: fields.data[i].description,
            });
            await newDescription.save();
        }
        res.status(200).json("data save");
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}
