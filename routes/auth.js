module.exports = (app) => {
    app.get('/', (req, res) => {
        res.render('login', { msg: 'Handlebars are Cool!' });
    })
}