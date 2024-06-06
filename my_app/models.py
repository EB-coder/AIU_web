from django.db import models
class News(models.Model):
    image = models.ImageField(upload_to="imgs/")
    title  = models.CharField(max_length=255)
    day = models.IntegerField()
    month = models.CharField(max_length=255)
   

    def __str__(self):
        return self.title 
    
class Counter(models.Model):
    text = models.CharField(max_length=255)
    number = models.IntegerField()
  
class Apply(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    subject = models.CharField(max_length=200)
    file = models.FileField(upload_to='uploads/')
    message = models.TextField()

    def __str__(self):
        return self.subject
