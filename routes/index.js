const Manga = require("./../models/manga")

module.exports = (app) => {
    app.get('/home', (req, res) => {
        Manga.find().then( manga => {
            res.render('home', { data: manga});
        })
    })
}