from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from django.contrib import messages
from categories.models import Categories
from .forms import DeleteTagForm

# Create your views here.


@login_required
def delete_tag(request):
    form = DeleteTagForm(request.user)
    if request.method == 'POST':
        form = DeleteTagForm(request.user, request.POST)
        if form.is_valid():
            tag_to_be_deleted = form.cleaned_data['tags']
            c = Categories.objects.get(user=request.user, tag=tag_to_be_deleted)
            c.delete()
            messages.success(request, 'You have successfully deleted this tag.')
            return redirect('/settings/delete/tag')
    return render(request, 'settings/delete_tag.html', {'form': form})

