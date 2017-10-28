const express = require('express');
const bodyParser = require('body-parser');
const storeRouter = require('./routers/StoreRouter')
const itemRouter = require('./routers/ItemRouter')
const orderRouter = require('./routers/OrderRouter')
const mongoose = require('mongoose');
const multer = require('multer');

const app = express();

app.use(bodyParser.json()) // to support JSON-encoded bodies
app.use(
	bodyParser.urlencoded({
		// to support URL-encoded bodies
		extended: true
	})
)

app.use(function (req, res, next) {	
	// Website you wish to allow to connect
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
	next();
});
// app.use(multer({
// 	dest: "./uploads/"
// }));

app.use('/api/stores', storeRouter);
app.use('/api/orders', orderRouter);
app.use('/api/items', itemRouter);

app.get('*', (req, res) => {
  res.send({test:'test'});
})

mongoose.connect(
	'mongodb://' + 'localhost' + ':' + '27017' + '/' + 'openr'
)

var server = app.listen(3001, () => {
	console.log('Listening on port:3001')
})
