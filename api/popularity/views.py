from django.shortcuts import render

# Create your views here.
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView

import pandas as pd
from bson.objectid import ObjectId
from pymongo import MongoClient

class Popularity(APIView):

  def get(self, request, format=None):
    response=[]
    store_id = request.GET.get('key', '')

    uri = "mongodb://localhost:27017/openr"
    client = MongoClient(uri)
    print(store_id)

    cursor = client.openr.transactions.find({'store_id':ObjectId(store_id)});

    print(cursor.count())
    if cursor.count() > 0:
        order_f =  pd.DataFrame(list(cursor))

        # print(order);
        # order = pd.read_csv('/DevSpace/ML-CU/workspace/openr/data/crayon/report_reserve_detail_at_2017_all.csv')
        # order.head()
        # order.iloc[:,[2,3,7,8,10,11]]
        # order_f=pd.DataFrame(order.iloc[:,[2,3,7,8,10,11]])
        # order_f.columns=['inv-no','inv-date','inv-line','sku-code','size','order-qty']
        # order_f.head(5)
        order_f.sort_values('sku',ascending=False).head()
        rating_count = order_f.groupby('sku')['amount'].sum()
        print(rating_count);
        ranging=pd.DataFrame(rating_count)
        ranging=ranging.sort_values('amount',ascending=False)
        
        # print(ranging)
        if cursor.count() > 5:
            limit = 5
        else:
            limit = cursor.count()
        data = ranging[0:limit][:].reset_index()
        
        print(data);
        for index, row in data.iterrows():
            print(row['sku'])
            response.append({'itemCd':row['sku'], 'amount':row['amount']})
        # for i in range(0,5):
        #     response.insert(ranging[i])


    # return Response(recommend,status=status.HTTP_200_OK);
    return Response(response,status=status.HTTP_200_OK);

