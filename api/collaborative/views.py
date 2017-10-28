from django.shortcuts import render

from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView

from MLModel.MLCollaborative import MLCollaborative

# Create your views here.


# keep track of model
modelDict = {
    'lazada': MLCollaborative('59f373a540e4c1960ce7c927')
}


# init model (choose one)
modelDict['lazada'].load('MLModel/util/collaborative.csv')        # faster
# modelDict['lazada'].fit()                                           # very expensive


class Collaborative(APIView):


  def get(self, request, item_cd, format=None):

    store_id = request.GET.get('key', '')

    # TODO: implement different response for each request
    # return lazada response for all request
    response = modelDict['lazada'].predict(item_cd)

    return Response(response,status=status.HTTP_200_OK);

