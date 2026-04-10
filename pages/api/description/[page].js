import dbConnect from "../../../lib/dbConnect";
import Description from "../../../lib/models/Description";

// Maps URL slugs to page names in the database
const PAGE_MAP = {
    Home: "Home",
    Temoignages: "Temoignages",
    Blog: "Blog",
    NotreConcept: "Notre concept",
    NotreMission: "Notre mission",
    NotreMethode: "Notre methode",
    NosOffres: "Nos offres",
    Individuel: "Accompagnement individuel",
    Collectif: "Accompagnement collectif",
    Faq: "FAQ",
    MentionsLegales: "Mentions legales",
    CVG: "Conditions generales de vente",
};

export default async function handler(req, res) {
    if (req.method !== "GET") {
        return res.status(405).json({ message: "Method not allowed" });
    }

    try {
        await dbConnect();
        const { page } = req.query;

        const pageName = PAGE_MAP[page];
        if (!pageName) {
            return res.status(404).json({ message: "Page not found" });
        }

        const response = await Description.findOne({ page: pageName });
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}
