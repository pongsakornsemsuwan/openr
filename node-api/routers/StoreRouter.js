const express = require('express')
const Store = require('./../models/Store.model')

let storeRouter = express.Router()

// insert new store
storeRouter.post('/', function(req, res, next) {
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

storeRouter.get('/', function(req, res, next) {
  
	try {
		Store.find({}).exec(function(err, stores) {
			if (err) {
        console.log(err)
        res.send(err);
			} else {
				res.json(stores)
			}
		})
	} catch (err) {
		console.log(err)
	}
})

module.exports = storeRouter
