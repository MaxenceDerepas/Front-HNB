import dbConnect from "../../../lib/dbConnect";
import Testimony from "../../../lib/models/Testimony";
import cloudinary from "../../../lib/cloudinary";
import parseForm from "../../../lib/parseForm";

export const config = { api: { bodyParser: false } };

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method not allowed" });
    }

    try {
        await dbConnect();
        const { fields, files } = await parseForm(req);

        const response = await Testimony.findById(fields._id);
        if (response.text[fields.indexText].logo.public_id !== "") {
            await cloudinary.uploader.destroy(
                response.text[fields.indexText].logo.public_id
            );
        }

        const result = await cloudinary.uploader.upload(
            files.picture.filepath
        );
        response.text[fields.indexText].logo.url = result.secure_url;
        response.text[fields.indexText].logo.public_id = result.public_id;
        response.text[fields.indexText].logo.fill = "";
        await response.save();
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}
