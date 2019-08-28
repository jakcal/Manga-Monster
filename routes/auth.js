const User = require('./../models/user')
const jwt = require("jsonwebtoken")

module.exports = (app) => {
    app.get('/', (req, res) => {
        res.render('login');
    })

    app.post('/sign-up', (req, res) => {
        const user = new User(req.body);
        user.save().then((user) => {
            const token = jwt.sign({_id: user._id}, process.env.SECRET, {expiresIn: '60 days'});
            res.cookie('nToken', token, { maxAge: 900000, httpOnly: true});
            res.redirect(`/`);
        }).catch(err => {
            console.log(err.message);
            return res.status(400).send({err:err})
        })
    })
}