import dbConnect from "../../../lib/dbConnect";
import Description from "../../../lib/models/Description";

export default async function handler(req, res) {
    if (req.method !== "GET") {
        return res.status(405).json({ message: "Method not allowed" });
    }

    try {
        await dbConnect();
        const response = await Description.find();
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}
