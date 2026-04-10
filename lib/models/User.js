import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: String,
    token: String,
    hash: String,
    salt: String,
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
