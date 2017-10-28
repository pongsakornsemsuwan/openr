from .MLBase import MLBase
from .DataSource import DataSource
import pandas as pd
import datetime

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
	def fit(self, collection, key, duration=0):
		# retrieve data
		order_f = DataSource.getDataFrame(collection, self.storeID)

		# filter date
		if duration != 0:
			# convert to datetime
			if collection == 'transactions':
				order_f['time'] = [datetime.datetime.strptime(t, '%Y-%m-%d %H:%M:%S') for t in order_f['date']]

			# fitler recent date
			cutoffDate = datetime.datetime.now() - datetime.timedelta(days=duration)
			order_f = order_f[order_f['time'] >= cutoffDate]

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
