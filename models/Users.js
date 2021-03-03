const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schemaStructure = {
	username: {
		required: true,
		type: String
	},
	email: {
		required: true,
		type: String,
		unique: true
	},
	password: {
		required: true,
		type: String
	},
	created_at: {
		required: false,
		type: Date
	}
}

const documentsShema = new Schema(schemaStructure);

module.exports = mongoose.model('User', documentsShema);
