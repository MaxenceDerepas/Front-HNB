import User from "./models/User";
import dbConnect from "./dbConnect";

export default async function isAuthenticated(token) {
    if (!token) {
        return false;
    }
    await dbConnect();
    const user = await User.findOne({ token });
    return !!user;
}
