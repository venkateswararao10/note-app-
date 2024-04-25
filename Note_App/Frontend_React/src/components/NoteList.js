// src/components/NoteList.js

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/NoteList.css';

function NoteList() {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/notes/')
            .then(response => {
                setNotes(response.data);
            })
            .catch(error => {
                console.error('Error fetching notes:', error);
            });
    }, []);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-200 to-blue-400">
            <div className="container mx-auto p-8">
                <h1 className="text-3xl font-bold mb-4 text-center">Notes</h1>
                <div className="note-list">
                    {notes.map(note => (
                        <div key={note.id} className="note-card">
                            <h2 className="note-title">{note.title}</h2>
                            <div className="note-actions">
                                <Link to={`/view/${note.id}`} className="view-note-btn">View</Link>
                                <Link to={`/delete/${note.id}/`} className="delete-note-btn">Delete</Link>
                            
                            </div>
                        </div>
                    ))}
                </div>
                <div className="create-note-btn-container">
                    <Link to="/create" className="create-note-btn">Create New Note</Link>
                </div>
            </div>
        </div>
    );
}

export default NoteList;
