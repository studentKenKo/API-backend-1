/**
*Run SQL in this API
* define an async utility function to get a connection
* run an SQL query then end the connection
*
* A module to run SQL queries on postpreSQL on behalf of the API models. * @module helpers/database
* @author Ko Long
* @see models/* for the models that require this module
*/

/**
* Run an SQL query against the DB, end the connection and return the result.
* @param {string} Query SQL query string in sqljs format
* @param {array|number|string} values The values to inject in to the query string. * @returns {object} mysqljs results object containing indexable rows
* @throws {DatabaseException} Custom exception for DB query failures
*/

/**
 * A custom error constructor to re-raise DB errors in a sanitised way.
 * @class
 * @param {string} message - the error message
 * @param {number|string} code - the original error's error code
 * @param {string} id - a UUID identifier for the error instanced
 */

const {Sequelize, QueryTypes} = require('sequelize')  
const info = require('../config')

exports.run_query = async function run_query(query, values) {
  try {
    const sequelize = new Sequelize(`postgres://${info.config.user}:${info.config.password}@${info.config.host}:${info.config.port}/${info.config.database}`)
    await sequelize.authenticate()
    
    let data = await sequelize.query(query, { 
      replacements: values,
      type: QueryTypes.SELECT 
    })    
    
    await sequelize.close()
    return data
  } catch (error) {
    console.error(error, query, values);
    throw 'Database query error'
  }
}

/**
 * / insert data to postgreSQL database
 */
exports.run_insert = async function run_insert(sql, values) {
  try {
    const sequelize = new Sequelize(`postgres://${info.config.user}:${info.config.password}@${info.config.host}:${info.config.port}/${info.config.database}`)
    await sequelize.authenticate()
    console.log('start '+values)
    let data = await sequelize.query(sql, {
      replacements: values,
      type: QueryTypes.INSERT
    })    
    console.log('end')
    await sequelize.close()
    console.log('return')
    return data
  } catch (error) {
    console.error(error, query, values);
    throw 'Database query error'
  }
}

 /**
 * / update data from postgreSQL database
 */ 
exports.run_update = async function run_update(sql, values) {
  try {
    const sequelize = new Sequelize(`postgres://${info.config.user}:${info.config.password}@${info.config.host}:${info.config.port}/${info.config.database}`)
    await sequelize.authenticate()
    console.log('start '+values)
    let data = await sequelize.query(sql, {
      replacements: values,
      type: QueryTypes.UPDATE
    })    
    console.log('end')
    await sequelize.close()
    console.log('return')
    return data
  } catch (error) {
    console.error(error, query, values);
    throw 'Database query error'
  }
}


 /**
 * / delete data from postgreSQL database
 */ 
exports.run_delete = async function run_delete(sql, values) {
  try {
    const sequelize = new Sequelize(`postgres://${info.config.user}:${info.config.password}@${info.config.host}:${info.config.port}/${info.config.database}`)
    await sequelize.authenticate()
    console.log('start '+values)
    let data = await sequelize.query(sql, {
      replacements: values,
      type: QueryTypes.DELETE
    })    
    console.log('end')
    await sequelize.close()
    console.log('return')
    return data
  } catch (error) {
    console.error(error, query, values);
    throw 'Database query error'
  }
}