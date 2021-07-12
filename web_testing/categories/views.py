from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from .forms import VideoFileForm
from .models import Categories
from django.core.files.storage import FileSystemStorage
from django.contrib import messages
from django.conf import settings
import uuid
import io
from moviepy.editor import *
from google.cloud import language_v1, speech
from .words import programming_words

# Create your views here.


# Instantiates a client
client = language_v1.LanguageServiceClient()
speech_client = speech.SpeechClient()


# separates video and audio in video file
def strip_video(video_file):
    filename = os.path.join(settings.MEDIA_ROOT, 'audio') + '/' + str(uuid.uuid4()) + '.wav' # 'audio/' + str(uuid.uuid4()) + '.wav'
    audio = AudioFileClip(video_file)
    audio.write_audiofile(filename, fps=16000, bitrate='256k', nbytes=2, codec='pcm_s16le')
    return filename


# returns transcription of audio file
def transcribe(audio_file):
    with io.open(audio_file, 'rb') as a:
        content = a.read()
        audio = speech.RecognitionAudio(content=content)

    config = speech.RecognitionConfig(
        encoding=speech.RecognitionConfig.AudioEncoding.LINEAR16,
        sample_rate_hertz=16000,
        language_code='en-US',
        audio_channel_count=2,
    )

    response = speech_client.recognize(config=config, audio=audio)

    transcript = ""

    for result in response.results:
        transcript += result.alternatives[0].transcript
    print(transcript)
    return transcript


# incorporates functions above to analyze key words (wrapper function)
def find_key_words(video_file):
    audio_file = strip_video(video_file)
    text = transcribe(audio_file)

    document = language_v1.Document(content=text, type_=language_v1.Document.Type.PLAIN_TEXT)
    response = client.analyze_entities(document=document, encoding_type='UTF32')

    entity_list = []
    for entity in response.entities:
        for word in programming_words:
            if entity.name.lower() == word.lower():
                entity_list.append(entity.name)
    print(entity_list)
    return entity_list


# Use information to find programming words
# programming words are classified as beginner, intermediate, and advanced
# Also consider level if person asks question about the topic because that means they don't know what it is.

def place_categories(user, words):
    for word in words:
        category = Categories.objects.filter(tag=word, user=user)
        if category.count() == 0:
            c = Categories(tag=word, user=user)
            c.save()


@login_required
def add_category(request):
    form = VideoFileForm()
    if request.method == 'POST':
        form = VideoFileForm(request.POST, request.FILES)
        if form.is_valid():
            # save video file
            file = request.FILES['video']
            file_name = str(uuid.uuid4())
            file_location = os.path.join(settings.MEDIA_ROOT, 'videos')
            fs = FileSystemStorage(location=file_location)
            fs.save(file_name, file)

            # analyze video file
            key_words = find_key_words(os.path.join(file_location, file_name))

            # create categories
            # this will probably be more complicated in the future
            place_categories(request.user, key_words)

            messages.success(request, 'Your file has been uploaded and analyzed. You will see tags shortly.')
    return render(request, 'categories/add_category.html', {'form': form})


@login_required
def show_tags(request):
    tags = Categories.objects.filter(user=request.user)
    return render(request, 'categories/show_categories.html', {'tags': tags})
