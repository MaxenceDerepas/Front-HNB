/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || "https://www.heart-n-brain.com",
    generateRobotsTxt: false,
    // Optionnel mais utile :
    changefreq: "weekly",
    priority: 0.7,
    sitemapSize: 5000,
};
