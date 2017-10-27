const express = require('express')
const Order = require('./../models/Order.model')
const Store = require('./../models/Store.model')
const Item = require('./../models/Item.model')

let orderRouter = express.Router()

// insert new order
orderRouter.post('/', async function(req, res, next) {
  try {
    console.log(req.body.storeId);
    console.log(req.body.items)

    let itemList = req.body.items;
    console.log(typeof itemList);
    
    let store = await Store.findById(req.body.storeId);
    console.log('store');
    console.log(store.id);
    console.log(store._id);

    let order = new Order();
    order.items = [];
    for(var i = 0 ;i < itemList.length; i++){
      console.log(i);
      console.log(itemList[0])
      console.log(itemList[1])
      // if item is not already exist, creat new item obj
      let item = await Item.findOne({ itemCd: itemList[i], storeId:req.body.storeId});
      console.log(item);
      // not found
      if(item == null){
        let newItem = new Item();
        newItem.itemCd = itemList[i];
        newItem.storeId = store.id
        item = await newItem.save();
      }
      console.log('item');
      console.log(item);

      order.items.push(item.id);
      order.storeId = store.id;
    }

    order = await order.save();

    // let order = new Order();
    // order.storeKey = req.body.storeKey;
    // order.items = 
    // store.name = 'ASD shop';
    // store.save( function(err, result){
    //   console.log(result);
    //   res.json(result);
    // });
    res.json({test:'test'});
  }catch (err){
    console.log(err)
  }
});

orderRouter.get('/', function(req, res, next) {
  let storeId = req.query.key;
	try {
		Order.find({storeId:storeId}).exec(function(err, orders) {
			if (err) {
        console.log(err)
        res.send(err);
			} else {
				res.json(orders)
			}
		})
	} catch (err) {
		console.log(err)
	}
})

router.post("/upload", function(req, res, next){
	if (req.files) {
		console.log(util.inspect(req.files));
		if (req.files.myFile.size === 0) {
		            return next(new Error("Hey, first would you select a file?"));
		}
		fs.exists(req.files.myFile.path, function(exists) {
			if(exists) {
				res.end("Got your file!");
			} else {
				res.end("Well, there is no magic for those who don’t believe in it!");
			}
		});
	}
});

module.exports = orderRouter
