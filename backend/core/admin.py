from django.contrib import admin
from .models import Lead, Customer, FollowUp

# --------- BRANDING ---------
admin.site.site_header = "Sepnoty Administration"
admin.site.site_title = "Sepnoty Admin Portal"
admin.site.index_title = "Welcome to Sepnoty CRM Admin Portal"

# --------- MODEL REGISTRATION ---------
@admin.register(Lead)
class LeadAdmin(admin.ModelAdmin):
    list_display = ("id", "name", "email", "phone", "score", "created_by")
    search_fields = ("name", "email", "phone")
    list_filter = ("created_by",)

@admin.register(Customer)
class CustomerAdmin(admin.ModelAdmin):
    list_display = ("id", "lead", "company") 

@admin.register(FollowUp)
class FollowUpAdmin(admin.ModelAdmin):
    list_display = ("id", "customer", "date")
    list_filter = ("date",)
