const Manga = require("./../models/manga")

module.exports = (app) => {
    app.get('/home', (req, res) => {
        Manga.find().then( mangas => {
            const views = []
            for (i=0; i < mangas.length; i += 1){
                views.push(mangas[i].views)
            }

            const mostViewed = views.sort(function(a, b) {
                return a - b;
            }).slice(-5)

            const popular = []
            for (var i=0; i < mangas.length; i++) {
                for (var j=0; j < mostViewed.length; j++) {
                    if (mangas[i].views === mostViewed[j]) {
                        popular.push(mangas[i])
                    }
                }
            }
            
            res.render('home', { data: mangas, first: popular[0], second: popular[1], third: popular[2]});
        })
    })
}

// var max = views.reduce(function(a, b) {
//     return Math.max(a, b);
// });

//     if (mangas[i].views > 1000000){}