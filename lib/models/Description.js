import mongoose from "mongoose";

const DescriptionSchema = new mongoose.Schema({
    page: String,
    description: String,
});

export default mongoose.models.Description ||
    mongoose.model("Description", DescriptionSchema);
