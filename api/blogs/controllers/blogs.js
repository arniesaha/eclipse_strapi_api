'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

const { parseMultipartData, sanitizeEntity } = require('strapi-utils');

module.exports = {


	async update (ctx) {

		const { id } = ctx.params;

		console.log(JSON.stringify(ctx.params));

		console.log(JSON.stringify(ctx.request.body));

		let entity = await strapi.services.blogs.update({ id }, ctx.request.body);

		return sanitizeEntity(entity, { model: strapi.models.blogs });

	},

};
