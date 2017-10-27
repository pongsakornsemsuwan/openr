from django.shortcuts import render

# Create your views here.


from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView

import numpy as np
import pandas as pd

import sklearn
from sklearn.decomposition import TruncatedSVD

class Popularity(APIView):

  def get(self, request, format=None):
    recommend = {'test':'testja'}

    dynamodb = boto3.client(
    'dynamodb',
    aws_access_key_id=os.environ.get("DYNAMODB_AWS_ACCESS_KEY_ID"),
    aws_secret_access_key=os.environ.get("DYNAMODB_AWS_SECRET_ACCESS_KEY")
)

    # return Response(recommend,status=status.HTTP_200_OK);
    return Response({'name':'test'},status=status.HTTP_200_OK);

