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
	def fit(self):
		# retrieve data
		order_f = DataSource.getDataFrame('transactions', self.storeID)

		# fit logic
		order_f.sort_values('sku',ascending=False)
		rating_count = order_f.groupby('sku')['amount'].sum()
		utilMatrix = pd.DataFrame(rating_count)
		self.utilMatrix = utilMatrix.sort_values('amount',ascending=False)

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
		self.utilMatrix.to_csv(self.filepath, index=False)

	#####################
	# load
	#####################
	def load(self, filepath):
		self.utilMatrix = pd.read_csv(self.filepath)
