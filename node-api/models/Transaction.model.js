const mongoose = require('mongoose')
var Schema = mongoose.Schema

var TransactionSchema = new Schema(
	{
    order : { type: Number },
    invoice_no : { type: String },
    date : { type: Date },
    item : { type: Number },
    sku : {type: String },
    option : {type: String },
    amount : {type: Number },
    store_id : {
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'Store'
    }
    ,orderDt: { type: Date, default: Date.now }
	},
	{
		timestamps: true
	}
)

module.exports = mongoose.model('Transaction', TransactionSchema)
