from django.shortcuts import render,redirect    
from .models import News,Counter
from django.http import HttpResponseRedirect
from django.shortcuts import render
from .forms import ContactFormForm


def home(request):
    news = News.objects.all()
    counter = Counter.objects.all()
    context = {'news':news,'counter': counter}
    return render(request, 'my_app/base.html',context)  # Главная страница теперь отображает about.html

def about(request):
    return render(request, 'my_app/about.html')

def phd_program(request):
    return render(request, 'my_app/phd_program.html')

def master_program(request):
    return render(request, 'my_app/master_program.html')

def research(request):
    return render(request, 'my_app/research.html')

def dual_degree(request):
   return render(request, 'my_app/dual_degree.html')

def apply(request):
    if request.method == 'POST':
        form = ContactFormForm (request.POST, request.FILES)
        if form.is_valid():
            form.save()
            return redirect('home')  # Redirect to a success page
    else:
        form = ContactFormForm()
    return render(request, 'my_app/apply.html', {'form': form})

