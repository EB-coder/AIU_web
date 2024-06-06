from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('', views.home, name='home'),
    path('about/', views.about, name='about'),
    path('phd-program/', views.phd_program, name='phd_program'),
    path('master-program/', views.master_program, name='master_program'),
    path('research/', views.research, name='research'),
    path('dual-degree/', views.dual_degree, name='dual_degree'),
    path('apply/', views.apply, name='apply'),
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
