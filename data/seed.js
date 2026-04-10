/**
 * Seed script - Import recovered data into a new MongoDB Atlas cluster
 *
 * Usage:
 *   node data/seed.js
 *
 * Make sure MONGODB_URI is set in your .env file before running.
 * Install dotenv if needed: npm install dotenv
 */

require("dotenv").config();
const mongoose = require("mongoose");
const fs = require("fs");
const path = require("path");

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
    console.error("❌ MONGODB_URI is not defined in .env");
    process.exit(1);
}

// --- Schemas ---
const BlogSchema = new mongoose.Schema({
    order: Number,
    title: String,
    titleUrl: String,
    urlMedia: Object,
    description: String,
    content: [Object],
    date: String,
});

const DescriptionSchema = new mongoose.Schema({
    page: String,
    description: String,
});

const TestimonySchema = new mongoose.Schema({
    url: String,
    public_id: String,
    text: [Object],
});

const Blog = mongoose.model("Blog", BlogSchema);
const Description = mongoose.model("Description", DescriptionSchema);
const Testimony = mongoose.model("Testimony", TestimonySchema);

// --- Main ---
async function seed() {
    console.log("🔗 Connecting to MongoDB...");
    await mongoose.connect(MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("✅ Connected!\n");

    // Load JSON data
    const dataDir = path.join(__dirname);
    const blogArticles = JSON.parse(fs.readFileSync(path.join(dataDir, "blog-articles.json"), "utf-8"));
    const descriptions = JSON.parse(fs.readFileSync(path.join(dataDir, "descriptions.json"), "utf-8"));
    const testimonies = JSON.parse(fs.readFileSync(path.join(dataDir, "testimonies.json"), "utf-8"));

    // Clean _id fields (let MongoDB generate new ones) and __v
    const cleanDoc = (doc) => {
        const { _id, __v, ...rest } = doc;
        return rest;
    };

    // --- Seed Blog articles ---
    console.log(`📝 Importing ${blogArticles.length} blog articles...`);
    await Blog.deleteMany({});
    for (const article of blogArticles) {
        await Blog.create(cleanDoc(article));
        console.log(`   ✓ ${article.title}`);
    }

    // --- Seed Descriptions ---
    console.log(`\n📄 Importing ${descriptions.length} page descriptions...`);
    await Description.deleteMany({});
    for (const desc of descriptions) {
        await Description.create(cleanDoc(desc));
        console.log(`   ✓ ${desc.page}`);
    }

    // --- Seed Testimonies ---
    console.log(`\n💬 Importing ${testimonies.length} testimony groups...`);
    await Testimony.deleteMany({});
    for (const testimony of testimonies) {
        await Testimony.create(cleanDoc(testimony));
        console.log(`   ✓ ${testimony.public_id} (${testimony.text.length} testimonials)`);
    }

    console.log("\n🎉 Seed complete!");
    console.log(`   ${blogArticles.length} blog articles`);
    console.log(`   ${descriptions.length} descriptions`);
    console.log(`   ${testimonies.length} testimony groups`);

    await mongoose.disconnect();
    console.log("🔌 Disconnected from MongoDB.");
}

seed().catch((err) => {
    console.error("❌ Seed failed:", err);
    process.exit(1);
});
