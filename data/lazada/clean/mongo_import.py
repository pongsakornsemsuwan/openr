import pandas as pd
import pymongo as pmg
from bson.objectid import ObjectId

reviewDF = pd.read_csv('review.csv')
reviewDF['time'] = pd.to_datetime(reviewDF['time'])
docList = reviewDF.to_dict('records')


# URI = "mongodb://172.17.0.1:27017"
URI = "mongodb://127.0.0.1:27017"
client = pmg.MongoClient()

for doc in docList:
	doc['store_id'] = ObjectId("59f373a540e4c1960ce7c927")
	client.openr.reviews.insert_one(doc)
