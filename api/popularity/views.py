from django.shortcuts import render

# Create your views here.
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView

from MLModel.MLPopularity import MLPopularity

class Popularity(APIView):

  def get(self, request, format=None):
    store_id = request.GET.get('key', '')

    model = MLPopularity(store_id)
    
    if store_id == '59f373a540e4c1960ce7c927':
        model.fit('reviews','rating')
    else:
        model.fit('transactions', 'amount')      # recompute model
    
    # model.save(<filename>)                 # save model to file
    # model.load(<filename>)                 # load model from file

    response = model.predict()

    # return Response(recommend,status=status.HTTP_200_OK);
    return Response(response,status=status.HTTP_200_OK);

