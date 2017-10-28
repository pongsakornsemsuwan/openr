from django.shortcuts import render

# Create your views here.
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView

import pandas as pd
from bson.objectid import ObjectId
from pymongo import MongoClient

import pandas as pd
from mlxtend.frequent_patterns import apriori
from mlxtend.frequent_patterns import association_rules

class Association(APIView):

  def get(self, request, item_cd, format=None):
    response=[]
    store_id = request.GET.get('key', '')

    uri = "mongodb://localhost:27017/openr"
    client = MongoClient(uri)
    print(store_id)
    print(item_cd)

    cursor = client.openr.transactions.find({'store_id':ObjectId(store_id)});

    def encode_units(x):
      if x <= 0:
          return 0
      if x >= 1:
          return 1

    print(cursor.count())
    if cursor.count() > 0:

      df =  pd.DataFrame(list(cursor))
      # df = pd.read_csv('report_reserve_detail_at_2017_all_exclude_non_use_col.csv')
      basket = (df.groupby(['invoice_no', 'sku'])['amount']
          .sum().unstack().reset_index().fillna(0)
          .set_index('invoice_no'))

      basket_sets = basket.applymap(encode_units)

      frequent_itemsets = apriori(basket_sets, min_support=0.001, use_colnames=True)
      rules = association_rules(frequent_itemsets, metric="lift", min_threshold=1)

      for x in range(0, len(rules)):
        if(item_cd in rules['antecedants'].values[x]):
          response.append( { 'sku': next(iter(rules.loc[x]['consequents'])), 'confidence': rules.loc[x]['confidence']})

    return Response(response,status=status.HTTP_200_OK);