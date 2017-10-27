const mongoose = require('mongoose')
const Item = require('./../models/Item.model')
var Schema = mongoose.Schema

var OrderSchema = new Schema(
	{
    items: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Item'
      }
    ],
    storeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Store'
    }
    ,orderDt: { type: Date, default: Date.now }
	},
	{
		timestamps: true
	}
)

module.exports = mongoose.model('Order', OrderSchema)
