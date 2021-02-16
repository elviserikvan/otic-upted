const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schemaStructure = {
	title: {
		required: true,
		type: String
	},
	amount: {
		required: true,
		type: Number
	},
	location: {
		required: true,
		type: String
	},
	description: {
		required: false,
		type: String
	}
}

const documentsShema = new Schema(schemaStructure);

module.exports = mongoose.model('Item', documentsShema);
