const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')
const model = require('../models/articles')
const {validateArticle} = require('../controllers/validation')
const router = Router({prefix: '/api/v1/articles'})

router.get('/m', getAllM)
router.get('/m/:id([0-9]{1,})', getByIdM)
router.post('/m', bodyParser(), validateArticle, createArticleM)
router.put('/:id([0-9]{1,})', updateArticleM)
router.del('/:id([0-9]{1,})', deleteArticleM)


async function getAllM(ctx, next){  
  let articles = await model.getAllMongo()
  if (articles) {
    ctx.body = articles
  }
}  

async function getByIdM(ctx) {
  let id = ctx.params.id
  console.log(id)
  let article = await model.getByIdMongo(id)
  if (article) {
    ctx.body = article[0]
  }
}

async function createArticleM(ctx) {
  const body = ctx.request.body
  let result = await model.addMongo(body)
  if (result) {
    ctx.status = 201
    ctx.body = result
  }
}

async function updateArticleM(ctx) {
  // TODO edit an existing article
}

async function deleteArticleM(ctx) {
  // TODO delete an existing article
}

module.exports = router;
