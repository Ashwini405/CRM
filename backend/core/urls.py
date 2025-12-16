from rest_framework.routers import DefaultRouter
from .views import LeadViewSet,CustomerViewSet,FollowUpViewSet
router=DefaultRouter()
router.register('leads',LeadViewSet)
router.register('customers',CustomerViewSet)
router.register('followups',FollowUpViewSet)
urlpatterns=router.urls
