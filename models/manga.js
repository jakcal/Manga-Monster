const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MangaSchema = new Schema ({
    "web-scraper-order": { type: String, text: true },
    "web-scraper-start-url": { type: String, text: true },
    link : { type: String, text: true },
    "link-href": { type: String, text: true },
    title: { type: String, text: true },
    authors: { type: String, text: true },
    artist: { type: String, text: true },
    genres: { type: String, text: true },
    demographic: { type: String, text: true },
    description: { type: String, text: true },
    "image-src": { type: String, text: true },    
})

module.exports = mongoose.model('Manga', MangaSchema)