const mongoose = require('mongoose');

var Schema = mongoose.Schema

var StoreSchema = new Schema(
	{
    email: String,
    name: String,
    key: String,
	},
	{
		timestamps: true
	}
)

module.exports = mongoose.model('Store', StoreSchema)
