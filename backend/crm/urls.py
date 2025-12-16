# from django.contrib import admin
# from django.urls import path,include
# from rest_framework_simplejwt.views import TokenObtainPairView,TokenRefreshView
# urlpatterns=[path('admin/',admin.site.urls),path('api/auth/login/',TokenObtainPairView.as_view()),path('api/auth/refresh/',TokenRefreshView.as_view()),path('api/',include('core.urls'))]
# from django.contrib import admin
# from django.urls import path, include
# from django.http import HttpResponse
# from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView


# # ✅ DEFINE HOME VIEW
# def home(request):
#     return HttpResponse("AI CRM Backend is running")


# urlpatterns = [
#     path('', home),   # 👈 root URL
#     path('admin/', admin.site.urls),
#     path('api/auth/login/', TokenObtainPairView.as_view()),
#     path('api/auth/refresh/', TokenRefreshView.as_view()),
#     path('api/', include('core.urls')),
# ]
from django.contrib import admin
from django.urls import path, include
from django.shortcuts import redirect
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

# ✅ Root URL → redirect to admin (professional)
def home(request):
    return redirect("/admin/")

urlpatterns = [
    # Root
    path("", home),

    # Admin panel
    path("admin/", admin.site.urls),

    # JWT Authentication
    path("api/auth/login/", TokenObtainPairView.as_view(), name="token_obtain_pair"),
    path("api/auth/refresh/", TokenRefreshView.as_view(), name="token_refresh"),

    # Core APIs
    path("api/", include("core.urls")),
]
