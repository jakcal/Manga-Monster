const Manga = require("./../models/manga")

module.exports = (app) => {
    app.get('/home', (req, res) => {
        Manga.find().then( manga => {
            // const views = []
            // for (i = 0; i < manga.length; i+=1) {
            //     const view = Number(manga[i].link.split("\n")[3].split(" ")[1])
            //     views.push(view)
            // }
            // console.log(views) 
            res.render('home', { data: manga});
        })
    })
}