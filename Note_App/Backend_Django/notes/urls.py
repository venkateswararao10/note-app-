# note_app/notes/urls.py

from django.urls import path
from . import views

urlpatterns = [
    path('api/notes/', views.NoteList.as_view(), name='note-list'),
    path('api/notes/<int:pk>/', views.NoteDetail.as_view(), name='note-detail'),
]
