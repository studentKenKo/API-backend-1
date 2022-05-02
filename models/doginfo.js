/**
* This API repository to hold the DB access logic
*
/**


const db = require('../helpers/database')

//get a single article by its id  
exports.getById = async function getById (id) {
  let query = "SELECT * FROM doginfo WHERE id = ?"
  let values = [id]
  let data = await db.run_query(query, values)
  return data
}

//list all the articles in the database
exports.getAll = async function getAll (page, limit, order) {
  // TODO: use page, limit, order to give pagination
  let query = "SELECT * FROM doginfo;"
  let data = await db.run_query(query)  
  return data
}

//create a new dos in the database
exports.add = async function add (doginfo) {  
  let keys = Object.keys(doginfo)
  let values = Object.values(doginfo)  
  keys = keys.join(',')   
  let parm = ''
  for(i=0; i<values.length; i++){ parm +='?,'}
  parm=parm.slice(0,-1)
  let query = `INSERT INTO articles (${keys}) VALUES (${parm})`
  try{
    await db.run_query(query, values)  
    return {"status": 201}
  } catch(error) {
    return error
  }
}

exports.updateArticles = async function updateArticles (id) {
  let query = 'UPDATE articles SET ? WHERE id = ?'
  let values = [id]
  let data = await db.run_query(query, values)
  return data
}

//Delete 
exports.deleteById = async function deleteById (id) {
  let query = 'DELETE FROM articles WHERE id = ?'
  let values = [id]
  let data = await db.run_query(query, values)
  return data
}

*/