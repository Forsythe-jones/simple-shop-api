const fastifyPlugin = require('fastify-plugin');
const mongoose = require('mongoose');
async function dbConnector(fastify, options) {
	try {
		const url = 'mongodb://localhost:27017/simple-shop-api';
		const db = await mongoose.connect(url, {
			useUnifiedTopology : true,
			useCreateIndex     : true,
			useNewUrlParser    : true,
			useFindAndModify   : false
		});
		fastify.decorate('db', db);
	} catch (err) {
		console.log(err);
		process.exit(1);
	}
}
module.exports = fastifyPlugin(dbConnector);
