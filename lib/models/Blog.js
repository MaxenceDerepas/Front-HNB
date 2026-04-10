import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema({
    order: Number,
    title: String,
    titleUrl: String,
    urlMedia: Object,
    description: String,
    content: [Object],
});

export default mongoose.models.Blog || mongoose.model("Blog", BlogSchema);
