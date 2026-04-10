import dbConnect from "../../../../lib/dbConnect";
import Blog from "../../../../lib/models/Blog";
import cloudinary from "../../../../lib/cloudinary";

export default async function handler(req, res) {
    if (req.method !== "GET") {
        return res.status(405).json({ message: "Method not allowed" });
    }

    try {
        await dbConnect();
        const { id } = req.query;

        const blog = await Blog.findById(id);
        for (let i = 0; i < blog.content.length; i++) {
            if (blog.content[i].type === "image") {
                await cloudinary.uploader.destroy(blog.content[i].public_id);
            } else if (blog.content[i].type === "block") {
                await cloudinary.uploader.destroy(
                    blog.content[i].image.public_id
                );
            }
        }

        await Blog.findByIdAndDelete(id);

        res.status(200).json({ message: "article supprimé" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}
