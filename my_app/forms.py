from django import forms
from .models import Apply

class ContactFormForm(forms.ModelForm):
    class Meta:
        model = Apply
        fields = ['name', 'email', 'subject', 'file', 'message']
