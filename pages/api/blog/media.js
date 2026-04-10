import dbConnect from "../../../lib/dbConnect";
import Blog from "../../../lib/models/Blog";
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

        const blog = await Blog.findOne({ title: fields.title });

        if (fields.type === "image") {
            const result = await cloudinary.uploader.upload(
                files.picture.filepath
            );
            if (blog.urlMedia.url === "") {
                blog.urlMedia.url = result.secure_url;
                blog.urlMedia.type = "image";
                blog.markModified("urlMedia");
            }
            blog.content[fields.index].url = result.secure_url;
            blog.content[fields.index].public_id = result.public_id;
            blog.markModified("content");
            await blog.save();
        } else if (fields.type === "video") {
            if (blog.urlMedia.url === "") {
                blog.urlMedia.url = blog.content[fields.index].url;
                blog.urlMedia.type = "video";
                blog.markModified("urlMedia");
            }
            await blog.save();
        } else if (fields.type === "block") {
            const result = await cloudinary.uploader.upload(
                files.picture.filepath
            );
            if (blog.urlMedia.url === "") {
                blog.urlMedia.url = result.secure_url;
                blog.urlMedia.type = "image";
                blog.markModified("urlMedia");
            }
            blog.content[fields.index].image.url = result.secure_url;
            blog.content[fields.index].image.public_id = result.public_id;
            blog.markModified("content");
            await blog.save();
        }

        res.status(200).json({ message: "article save" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}
