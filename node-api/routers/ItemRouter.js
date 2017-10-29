const express = require('express')
const Item = require('./../models/Item.model')
const Transaction = require('./../models/Transaction.model')
const Store = require('./../models/Store.model')
const ObjectId = require('mongodb').ObjectID;

let itemRouter = express.Router()

// insert new store
itemRouter.post('/', function(req, res, next) {
  try {
    let store = new Store();
    store.email = 'asd@asd.com';
    store.name = 'ASD shop';
    store.save( function(err, result){
      console.log(result);
      res.json(result);
    });
  }catch (err){
    console.log(err)
  }
});

itemRouter.get('/', async function(req, res, next) {
  let storeId = req.query.key;
  if(!req.query.key){
    res.json({error:'key not found'})
    return;
  }
  console.log(storeId);
	try {
    console.log(new Date())
		Item.find({store_id:storeId}).limit(1000).exec(function(err, items) {
      console.log(new Date())
			if (err) {
        console.log(err)
        res.send(err);
			} else {
				res.json(items)
			}
    })
    
    // Transaction.find({store_id:ObjectId(storeId)}).distinct('sku', function(err, ids) {
    //   if(err){
    //     console.log(err)
    //     res.send(err)
    //   }else{
    //     const response = ids.map(id=>{
    //       return { 'itemCd': id }
    //     });
    //     res.json(response);
    //   }
    // });
	} catch (err) {
		console.log(err)
	}
})

module.exports = itemRouter
