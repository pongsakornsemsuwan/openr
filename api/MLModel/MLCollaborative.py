from .MLBase import MLBase
from .DataSource import DataSource
import pandas as pd
from sklearn.decomposition import TruncatedSVD

####################################
# MLCollaborative class
####################################
class MLCollaborative(MLBase):

	#####################
	# __init__
	#####################
	def __init__(self, storeID):
		self.storeID = storeID
		self.utilMatrix = pd.DataFrame()
		self.corrDF = pd.DataFrame()

	#####################
	# fit
	#####################
	def fit(self):
		reviewDF = DataFrame.getDataFrame('reviewDF', self.storeID)
		uMatrix = reviewDF.pivot(index='user_fk', columns='sku', values='rating')	# expensive
		uMatrix.fillna(0, inplace=True)
		svd = TruncatedSVD(n_components=50)
		self.utilMatrix = pd.DataFrame(svd.components_, columns=uMatrix.columns)
		self.corrDF = self.uMatrix.corr()

	#####################
	# predict
	#####################
	def predict(self, itemID):
		response = list()

		predictItem = self.corrDF[itemID] \
			.sort_values(ascending=False) \
			.drop(itemID)

		response = list()
		limit = 5
		for index, row in zip(predictItem.index, predictItem.values):
			response.append({'itemCd':index, 'corr':row})
			if len(response) == limit:
				break

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
		self.corrDF = self.utilMatrix.corr()
