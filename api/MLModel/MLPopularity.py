from .MLBase import MLBase
from .DataSource import DataSource
import pandas as pd

####################################
# MLPopularity class
####################################
class MLPopularity(MLBase):

	#####################
	# MLPopularity class
	#####################
	def __init__(self, storeID):
		self.storeID = storeID
		self.utilMatrix = pd.DataFrame()

	#####################
	# fit
	#####################
	def fit(self, collection, key):
		# retrieve data
		order_f = DataSource.getDataFrame(collection, self.storeID)

		# fit logic
		order_f.sort_values('sku',ascending=False)
		rating_count = order_f.groupby('sku')[key].sum()
		utilMatrix = pd.DataFrame(rating_count)
		self.utilMatrix = utilMatrix.sort_values(key,ascending=False)

	#####################
	# predict
	#####################
	def predict(self):
		limit = max(5, self.utilMatrix.shape[0])
		print(limit)
		data = self.utilMatrix.head(5).reset_index()

		response = list()
		for index, row in data.iterrows():
			response.append({'itemCd':row['sku'], 'amount':row['amount']})
		return response

	#####################
	# save
	#####################
	def save(self, filepath):
		self.utilMatrix.to_csv(filepath, index=False)

	#####################
	# load
	#####################
	def load(self, filepath):
		self.utilMatrix = pd.read_csv(filepath)
