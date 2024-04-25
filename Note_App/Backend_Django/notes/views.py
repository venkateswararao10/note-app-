from django.shortcuts import render

# Create your views here.
# note_app/notes/views.py

from rest_framework import generics
from .models import Note
from .serializers import NoteSerializer

class NoteList(generics.ListCreateAPIView):
    queryset = Note.objects.all()
    serializer_class = NoteSerializer

class NoteDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Note.objects.all()
    serializer_class = NoteSerializer
