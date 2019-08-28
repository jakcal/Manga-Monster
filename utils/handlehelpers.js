const exphbs = require('express-handlebars')
const path = require('path')

exports.hbs = exphbs.create({
    defaultLayout: 'main', 
    extname: 'handlebars', 
    layoutsDir: path.join(__dirname, './../views/layouts'), 
    helpers: {
      ifequal: function(a, b, options) {
        if (a == b) { return options.fn(this); }
      },
      notequal: function(a, b, options) {
        if (a != b) { return options.fn(this); }
      },
      concat: function(){
        const arg = Array.prototype.slice.call(arguments,0);
        arg.pop()
        return arg.join('')
      },
      contains: function(a, b, options){
        if (a.includes(b)) { return options.fn(this); }
      },
      ifCond: function(a, operator, b, options) {
        var bool = false;
        switch (operator) {
          case '>':
              bool = a > b
              break
          case '<':
              bool = a < b
              break
          case '&&', 'and':
              bool = a && b
              break
          case '||', 'or':
              bool = a || b
              break
          default:
              throw "Unknown operator " + operator
        }
      if (bool) {
          return options.fn(this)
      } 
        }
      }
})