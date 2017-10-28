####################################
# MLBase class
####################################
class MLBase(object):

	def fit(self): raise NotImplementedError
	def predict(self): raise NotImplementedError
	def load(self): raise NotImplementedError
	def save(self): raise NotImplementedError
