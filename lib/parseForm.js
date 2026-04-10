import formidable from "formidable";

export const config = {
    api: {
        bodyParser: false,
    },
};

export default function parseForm(req) {
    return new Promise((resolve, reject) => {
        const form = formidable({ multiples: true });
        form.parse(req, (err, fields, files) => {
            if (err) reject(err);
            // Parse JSON strings in fields (express-formidable did this automatically)
            const parsedFields = {};
            for (const key in fields) {
                try {
                    parsedFields[key] = JSON.parse(fields[key]);
                } catch {
                    parsedFields[key] = fields[key];
                }
            }
            resolve({ fields: parsedFields, files });
        });
    });
}
