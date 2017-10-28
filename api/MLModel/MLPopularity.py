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
		self.utilMatrix = order_f.groupby('sku')[key] \
			.sum() \
			.reset_index() \
			.sort_values(key,ascending=False)
		self.utilMatrix.rename({key: 'amount'}, inplace=True)

	#####################
	# predict
	#####################
	def predict(self):
		limit = max(5, self.utilMatrix.shape[0])
		print(limit)
		data = self.utilMatrix.head(5)

		response = list()
		for sku, amt in data.values:
			response.append({'itemCd':sku, 'amount':amt})
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
