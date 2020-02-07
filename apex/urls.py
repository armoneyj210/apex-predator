from django.urls import include, path
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register('character', views.CharacterView)
router.register('skin', views.SkinView)
router.register('map', views.MapView)
router.register('weapon_type', views.WeaponTypeView)
router.register('weapon', views.WeaponView)



urlpatterns = [
    path('', include(router.urls))
]