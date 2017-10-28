from django.shortcuts import render

from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView

from MLModel.MLCollaborative import MLCollaborative

# Create your views here.
class Collaborative(APIView):


  def get(self, request, item_cd, format=None):

    store_id = request.GET.get('key', '')

    # load model
    model = MLCollaborative(store_id)
    model.load('MLModel/util/collaborative.csv')
    response = model.predict(item_cd)

    return Response(response,status=status.HTTP_200_OK);

