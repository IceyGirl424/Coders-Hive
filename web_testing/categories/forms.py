import os.path
from django import forms
from django.core.exceptions import ValidationError


class VideoFileForm(forms.Form):
    video = forms.FileField()

    def clean_video(self):
        data = self.cleaned_data['video']
        extension = os.path.splitext(data.name)[1]
        print('validation')
        if extension != '.mp4':
            raise ValidationError('Unsupported file type')
        return data

