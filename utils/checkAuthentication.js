const cookieParser = require('cookie-parser')
const jwt = require("jsonwebtoken")

exports.checkAuth = (req, res, next) => {
    if (typeof req.cookies.nToken === "undefined" || req.cookies.nToken === null) {
        console.log("no active user")
        req.user = null
    } else {
        console.log("currently active user")
        let token = req.cookies.nToken
        let decodedToken = jwt.decode(token, { complete: true }) || {}
        req.user = decodedToken.payload
    }
  
    next()
}