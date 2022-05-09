// The Canine Shelter API
// Set up the application and its router
const Koa = require('koa')
const static = require('koa-static-router')
const app = new Koa()
const special = require('./routes/special')
const articles = require('./routes/articles')
const user = require('./routes/users')
const cors = require('@koa/cors');


app.use(special.routes())
app.use(articles.routes())
app.use(user.routes())
app.use(static({dir:'docs', router: '/doc/'}))
app.use(cors());

// Finally, run the app as a process on a given port
let port = process.env.PORT || 10999;

app.listen(port)
console.log('API is ready')