const express = require('express')
const Item = require('./../models/Item.model')

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

itemRouter.get('/', function(req, res, next) {
  let storeId = req.query.key;
  console.log('asdasda');
  console.log(storeId);
	try {
		Item.find({storeId:storeId}).exec(function(err, items) {
			if (err) {
        console.log(err)
        res.send(err);
			} else {
				res.json(items)
			}
		})
	} catch (err) {
		console.log(err)
	}
})

module.exports = itemRouter
