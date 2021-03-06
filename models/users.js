//findout user in Database

const db = require('../helpers/database')

exports.findByUsername = async function getByUsername(username) {
  const query = 'SELECT * from users where username = ?'
  const user = await db.run_query(query, [username])
  return user
}

//list all the articles in the database
exports.getAll = async function getAll () {
  // TODO: use page, limit, order to give pagination
  let query = "SELECT * FROM users;"
  let data = await db.run_query(query)  
  return data
}