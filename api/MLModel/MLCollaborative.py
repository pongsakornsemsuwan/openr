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

		limit = 5
	
		category_code = itemID[5:7]
		predictItem = self.corrDF[itemID] \
			.sort_values(ascending=False) \
			.drop(itemID) \
			.reset_index() \
			.rename(columns={'index':'sku'})
			# .head(limit) \
			
		
		predictItem_filter = predictItem[predictItem['sku'].str[5:7] == category_code];
		predictItem_filter = predictItem_filter.head(limit);

		nameDF = DataSource.getItemNameBySkus(list(predictItem_filter['sku']), self.storeID)

		predictItem_filter = predictItem_filter.merge(nameDF[['name', 'sku']], on='sku')

		response = list()
		
		for sku, corr, name in predictItem_filter[['sku', itemID, 'name']].values:
			response.append({'itemCd': sku, 'corr': corr, 'name': name})

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
