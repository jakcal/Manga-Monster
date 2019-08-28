require('dotenv').config();

const express = require('express')
const exphbs = require('express-handlebars')
const path = require('path')
const expressValidator = require('express-validator')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const jwt = require('jsonwebtoken')
const methodOverride = require('method-override')
const helpers = require('./utils/handlehelpers.js')
const check = require('./utils/checkAuthentication.js')
const app = express()

app.use(bodyParser.json({type: 'application/**json'}))
app.use(bodyParser.urlencoded({extended: true}))
app.use(methodOverride('_method'))
app.use(cookieParser())
app.use(expressValidator())
app.use(check.checkAuth)

app.use(express.static(path.join(__dirname, '/public')))
app.engine('handlebars', helpers.hbs.engine)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'handlebars')

app.listen(3000, () => {
    console.log('App listening on port 3000!')
})

// DATABASE
require('./db-config/develop.js')

// ROUTES
require('./routes/auth.js')(app)

module.exports = app 
