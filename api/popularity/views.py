from django.shortcuts import render

# Create your views here.
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView

from MLModel.MLPopularity import MLPopularity

class Popularity(APIView):

	def get(self, request, format=None):
		store_id = request.GET.get('key', '')
		try:
			duration = int(request.GET.get('p'))
		except Exception as e:
			print('cannot parse "p" parameter in Popularity.get()', e)
			duration = 0

		model = MLPopularity(store_id)

		# short-term solution
		# TODO make model not re-train on each request
		# lazada
		if store_id == '59f373a540e4c1960ce7c927':
			model.fit('reviews', 'rating', duration)
		# crayon
		else:
			model.fit('transactions', 'amount', duration)

		response = model.predict()

		# return Response(recommend,status=status.HTTP_200_OK);
		return Response(response,status=status.HTTP_200_OK);

