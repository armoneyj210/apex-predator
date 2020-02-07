from django.contrib import admin

from .models import Weapon, WeaponType, Map, Skin, Character

admin.site.register([Weapon, WeaponType, Map, Skin, Character])
