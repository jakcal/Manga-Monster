const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MangaSchema = new Schema ({
    num: { type: Number },
    "link-href": { type: String, text: true },
    title: { type: String, text: true },
    authors: { type: String, text: true },
    artist: { type: String, text: true },
    genres: { type: String, text: true },
    demographic: { type: String, text: true },
    description: { type: String, text: true },
    "image-src": { type: String, text: true },
    views: { type: Number },    
})

module.exports = mongoose.model('Manga', MangaSchema)