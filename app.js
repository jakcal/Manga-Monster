const express = require('express')
const exphbs = require('express-handlebars')
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname, '/public')))
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.listen(3000, () => {
    console.log('App listening on port 3000!')
})

require('./routes/auth.js')(app)

module.exports = app 
