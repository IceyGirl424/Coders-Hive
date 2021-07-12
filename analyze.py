import uuid
import io
from moviepy.editor import *
from google.cloud import language_v1, speech

# This is the original version from analyzing a video file

# Instantiates a client
client = language_v1.LanguageServiceClient()
speech_client = speech.SpeechClient()


# separates video and audio in video file
def strip_video(video_file):
    filename = 'audio/' + str(uuid.uuid4()) + '.wav'
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
        entity_list.append([entity.name, entity.metadata, entity.salience])
    return entity_list


# Use information to find programming words
# programming words are classified as beginner, intermediate, and advanced
# Also consider level if person asks question about the topic because that means they don't know what it is.
