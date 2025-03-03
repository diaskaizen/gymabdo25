from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('', include('admin_material.urls')),

    path('admin/', admin.site.urls),
    path('api/', include('gymapp.urls')),
]
