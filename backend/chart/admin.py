from django.contrib import admin
from .models import Chart


class ChartAdmin(admin.ModelAdmin):
    pass

admin.site.register(Chart, ChartAdmin)
