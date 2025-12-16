from django.db import models
from django.contrib.auth.models import User
class Lead(models.Model):
 name=models.CharField(max_length=100)
 email=models.EmailField()
 phone=models.CharField(max_length=15)
 score=models.FloatField(default=0)
 created_by=models.ForeignKey(User,on_delete=models.CASCADE,null=True,blank=True)
class Customer(models.Model):
 lead=models.OneToOneField(Lead,on_delete=models.CASCADE)
 company=models.CharField(max_length=100)
class FollowUp(models.Model):
 customer=models.ForeignKey(Customer,on_delete=models.CASCADE)
 note=models.TextField()
 date=models.DateField()
