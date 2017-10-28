"""api URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.11/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import include, url
from django.contrib import admin
from rest_framework import routers
from popularity import views as PopularityViewSet
from association import views as AssociationViewSet
from collaborative.views import Collaborative

router = routers.SimpleRouter()
router.register(r'^popularity/$', PopularityViewSet.Popularity.as_view(), base_name='popularity')
# router.register(r'correlation', AccountViewSet)

urlpatterns = [
    # url(r'^api/popularity', include(router.urls, namespace='api')),
    url(r'^api/popularity/(?P<key>\d+)', PopularityViewSet.Popularity.as_view() ),
    url(r'^api/popularity', PopularityViewSet.Popularity.as_view() ),
    url(r'^api/popularity', PopularityViewSet.Popularity.as_view() ),
    url(r'^api/popularity', PopularityViewSet.Popularity.as_view() ),
    url(r'^api/association/item/(?P<item_cd>[[a-zA-Z0-9_-]+)', AssociationViewSet.Association.as_view() ),
    url(r'^api/collaborative/item/(?P<item_cd>[[a-zA-Z0-9_-]+)', Collaborative.as_view() )
]

