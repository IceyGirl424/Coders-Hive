from django import forms
from categories.models import Categories


class DeleteTagForm(forms.Form):
    def __init__(self, user, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.user = user
        self.fields['tags'] = forms.ChoiceField(choices=self.get_choices())

    def get_choices(self):
        categories = Categories.objects.filter(user=self.user)
        tags = []
        for category in categories:
            tags.append((category.tag, category.tag))
        print(tags)
        return tags


