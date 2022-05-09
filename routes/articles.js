const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')
const model = require('../models/articles')
const {validateArticle} = require('../controllers/validation')

const router = Router({prefix: '/api/v1/articles'})

router.get('/', getAll)
router.post('/', bodyParser(), validateArticle, createArticle)
router.get('/:id([0-9]{1,})', getById)
router.put('/:id([0-9]{1,})',bodyParser(), validateArticle, updateArticle)
router.del('/:id([0-9]{1,})', deleteArticle)

async function getAll(ctx, next){  
  let articles = await model.getAll()
  if (articles.length) {
    ctx.body = articles
    console.log(articles)
  }
}  

async function getById(ctx) {
  let id = ctx.params.id
  let article = await model.getById(id)
  if (article.length) {
    ctx.body = article[0]
  }
}

async function createArticle(ctx) {
  const body = ctx.request.body
  let result = await model.add(body)
  if (result) {
    ctx.status = 201
    ctx.body = result
  }
}

async function updateArticle(ctx) {
  // TODO edit an existing article
  //let article = 
  let id = ctx.params.id
  if ((id < articles.length) && (id > 0)) {
    articles[id-1] = {title:title, fullText:fullText}
    cnx.status = 201
    cnx.body = articles[id-1]
  } else {
    cnx.status = 404
  } 
}  

async function deleteArticle(ctx) {
  // TODO delete an existing article
   const body = ctx.request.body
  let result = await model.DeleteById(body)
  if (result) {
    ctx.status = 201
    ctx.body = result
  }
}

module.exports = router
/*
function updateArticle(cnx, next){  
  let id = cnx.params.id
  if ((id < articles.length) && (id > 0)) {
    articles[id-1] = {title:title, fullText:fullText}
    cnx.status = 201
    cnx.body = articles[id-1]
  } else {
    cnx.status = 404
  } 
}  

function deleteArticle(cnx, next){  
  let id = cnx.params.id
  if ((id < articles.length) && (id > 0)) {
    articles.slice(id-1, 1)
    cnx.status = 201
    cnx.body = articles
  } else {
    cnx.status = 404
  } 
}  

*/
