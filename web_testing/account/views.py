from django.shortcuts import render, redirect
from .models import CustomUser
from .forms import SignUpForm
from django.contrib.auth.forms import AuthenticationForm
from django.contrib.auth import logout as user_logout, login as user_login
from django.contrib.auth.decorators import login_required

# Create your views here.


def login(request):
    if request.user.is_authenticated:
        return redirect('/categories/add')
    form = AuthenticationForm()
    if request.method == 'POST':
        form = AuthenticationForm(data=request.POST)
        if form.is_valid():
            user = CustomUser.objects.get(username=form.cleaned_data['username'])
            user_login(request, user)
            return redirect('/categories/add')
    return render(request, 'account/login.html', {'form': form})


@login_required
def logout(request):
    if request.method == 'POST':
        user_logout(request)
        return redirect('/')
    return render(request, 'account/logout.html', {})


def register(request):
    form = SignUpForm()
    if request.method == 'POST':
        form = SignUpForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('/')
    return render(request, 'account/register.html', {'form': form})