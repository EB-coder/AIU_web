from django.shortcuts import render

def home(request):
    return render(request, 'my_app/base.html')  # Главная страница теперь отображает about.html

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
    return render(request, 'my_app/apply.html')

