/**
 * A module to run JSON Schema based validation on request/response data.
 * @module controllers/validation
 * @author Ko Long
 * @see schemas/* for JSON Schema definition files
 */

const {Validator, ValidationError} = require('jsonschema')
const schema = require('../schemas/article.schema.js');
const v = new Validator()

exports.validateArticle = async (ctx, next) => {

  const validationOptions = {
    throwError: true,
    allowUnknownAttributes: false
  }
  const body = ctx.request.body
  
  try {
    v.validate(body, schema, validationOptions)
    await next()
  } catch (error) {
    if (error instanceof ValidationError) {
      ctx.body = error
      ctx.status = 400      
    } else {
      throw error
    }
  }
}
