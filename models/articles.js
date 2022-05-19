/**
* This API repository to hold the DB access logic
*
*/



const db = require('../helpers/database')

//get a single article by its id  
exports.getById = async function getById (id) {
  let query = "SELECT * FROM articles WHERE id = ?"
  let values = [id]
  let data = await db.run_query(query, values)
  return data
}

//list all the articles in the database
//use page, limit, order to give pagination
exports.getAll = async function getAll (page, limit, order) {
  let query = "SELECT * FROM articles;"
  let data = await db.run_query(query)  
  return data
}

//create a new article in the database
exports.add = async function add (article) {  
  let keys = Object.keys(article)
  let values = Object.values(article)  
  keys = keys.join(',')
  let parm = ''
  for(i=0; i<values.length; i++){ parm +='?,'}
  parm=parm.slice(0,-1)
  let query = `INSERT INTO articles (${keys}) VALUES (${parm})`
  try{
    console.log(parm)
    await db.run_query(query, values)  
    return {"status": 201}
  } catch(error) {

    
    return {"status": 424}
  }
}


//update a single article by its id  
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


//delete a single article by its id  


exports.DeleteById = async function DeleteById (id) {
  let query = 'DELETE FROM articles WHERE id = ?'
  let values = [id]
  let data = await db.run_query(query, values)
  return data
}
