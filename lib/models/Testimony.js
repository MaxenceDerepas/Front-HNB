import mongoose from "mongoose";

const TestimonySchema = new mongoose.Schema({
    url: String,
    public_id: String,
    text: [Object],
});

export default mongoose.models.Testimony ||
    mongoose.model("Testimony", TestimonySchema);
