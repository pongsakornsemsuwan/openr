const mongoose = require('mongoose')
const Store = require('./Store.model')

var Schema = mongoose.Schema

var ItemSchema = new Schema(
	{
    itemCd: String,
    storeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Store'
    }
	},
	{
		timestamps: true
	}
)

module.exports = mongoose.model('Item', ItemSchema)
