import dbConnect from "../../../lib/dbConnect";
import Blog from "../../../lib/models/Blog";
import parseForm from "../../../lib/parseForm";

export const config = { api: { bodyParser: false } };

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method not allowed" });
    }

    try {
        await dbConnect();
        const { fields } = await parseForm(req);
        const data = fields.data;

        let newStr = "";
        for (let i = 0; i < data.title.length; i++) {
            if (data.title[i] === " ") {
                newStr = newStr + "-";
            } else if (
                data.title[i] === "!" ||
                data.title[i] === "$" ||
                data.title[i] === "/" ||
                data.title[i] === "*" ||
                data.title[i] === "?"
            ) {
                // skip special characters
            } else {
                newStr = newStr + data.title[i];
            }
        }
        while (newStr[newStr.length - 1] === "-") {
            newStr = newStr.substring(0, newStr.length - 1);
        }
        newStr = newStr.toLowerCase();

        const response = await Blog.find().sort({ order: "desc" });
        const count = response[0].order + 1;

        const newArticle = new Blog({
            order: count,
            title: data.title,
            titleUrl: newStr,
            description: data.description,
            urlMedia: { url: "", type: "" },
            content: [],
        });

        for (let i = 0; i < data.content.length; i++) {
            if (data.content[i].type === "text") {
                newArticle.content.push(data.content[i]);
            } else if (data.content[i].type === "image") {
                newArticle.content.push({
                    file: "",
                    type: "image",
                    url: "",
                    public_id: "",
                    style: data.content[i].style,
                });
            } else if (data.content[i].type === "video") {
                newArticle.content.push(data.content[i]);
            } else if (data.content[i].type === "block") {
                newArticle.content.push({
                    type: "block",
                    image: {
                        file: "",
                        url: "",
                        style: data.content[i].image.style,
                    },
                    paragraph: data.content[i].paragraph,
                });
            }
            await newArticle.save();
        }
        res.status(200).json({ message: "article save" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}
