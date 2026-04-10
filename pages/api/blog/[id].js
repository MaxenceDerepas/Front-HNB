import dbConnect from "../../../lib/dbConnect";
import Blog from "../../../lib/models/Blog";

export default async function handler(req, res) {
    if (req.method !== "GET") {
        return res.status(405).json({ message: "Method not allowed" });
    }

    try {
        await dbConnect();
        const { id } = req.query;
        const article = await Blog.findOne({ titleUrl: id });
        res.status(200).json(article);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}
