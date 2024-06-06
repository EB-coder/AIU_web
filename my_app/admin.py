from django.contrib import admin
from .models import News,Counter,Apply



class NewsAdmin(admin.ModelAdmin):
    list_display=('title','add_time')
admin.site.register(News)
admin.site.register(Counter)
admin.site.register(Apply)

