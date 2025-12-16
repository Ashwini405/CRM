from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAuthenticated
from .models import Lead,Customer,FollowUp
from .serializers import LeadSerializer,CustomerSerializer,FollowUpSerializer
from .ml import score_lead
class LeadViewSet(ModelViewSet):
 permission_classes=[IsAuthenticated]
 serializer_class=LeadSerializer
 queryset=Lead.objects.all()
 def get_queryset(self): return Lead.objects.filter(created_by=self.request.user)
 def perform_create(self,serializer): serializer.save(created_by=self.request.user,score=score_lead(serializer.validated_data))
class CustomerViewSet(ModelViewSet):
 permission_classes=[IsAuthenticated]
 queryset=Customer.objects.all()
 serializer_class=CustomerSerializer
class FollowUpViewSet(ModelViewSet):
 permission_classes=[IsAuthenticated]
 queryset=FollowUp.objects.all()
 serializer_class=FollowUpSerializer
