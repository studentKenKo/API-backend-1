/**
 * Wrapper that returns a Koa middleware validator for a given schema.
 * @param {object} schema - The JSON schema definition of the resource
 * @param {string} resource - The name of the resource e.g. 'article'
 * @returns {function} - A Koa middleware handler taking (ctx, next) params
 */

/**
* Koa middleware handler function to do validation
* @param {object} ctx - The Koa request/response context object * @param {function} next - The Koa next callback
* @throws {ValidationError} a jsonschema library exception
*/

/** Validate data against article schema */
exports.validateArticle = makeKoaValidator(articleSchema, 'article')
/** Validate data against category schema */
exports.validateCategory = makeKoaValidator(categorySchema, 'category')
/** Validate data against comment schema */
exports.validateComment = makeKoaValidator(commentSchema, 'comment')
/** Validate data against user schema for creating new users */
exports.validateUser = makeKoaValidator(userSchema, 'user')
/** Validate data against user schema for updating existing users */
exports.validateUserUpdate = makeKoaValidator(userUpdateSchema, 'userUpdate')