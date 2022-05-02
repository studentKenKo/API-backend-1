const dbMongo = require('../helpers/mongodb')

exports.getAllMongo =  async function getAllMongo (page, limite, order) {
  let data = await dbMongo.run_query('articles', {})
  return data
}

exports.getByIdMongo =  async function getByIdMongo (id) {
  let data = await dbMongo.run_query('articles', {'authorID': parseInt(id)})
  return data
}

exports.addMongo =  async function addMongo (document) {
  let status = await dbMongo.run_insert('articles', document)
  return status
}