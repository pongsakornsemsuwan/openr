from pymongo import MongoClient
from bson.objectid import ObjectId
import pandas as pd


####################################
# DataSource
####################################
class DataSource():

	#####################
	# class variables
	#####################
	URI = "mongodb://172.17.0.1:27017/openr"
	client = MongoClient()

	#####################
	# getDataFrame
	#####################
	@classmethod
	def getDataFrame(cls, collectionName, storeID):
		cursor = cls.client.openr[collectionName].find({'store_id':ObjectId(storeID)})
		return pd.DataFrame(list(cursor))

