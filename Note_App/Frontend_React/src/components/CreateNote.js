// src/components/CreateNote.js

import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/CreateNote.css';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
function CreateNote() {
    const [note, setNote] = useState({
        title: '',
        content: ''
    });
    const [alertVisible, setAlertVisible] = useState(false);
   const navigate=useNavigate();
    const handleChange = e => {
        const { name, value } = e.target;
        setNote(prevNote => ({
            ...prevNote,
            [name]: value
        }));
    };

    const handleSubmit = e => {
        e.preventDefault();
        axios.post('http://127.0.0.1:8000/api/notes/', note)
            .then(() => {
                console.log('Note created successfully');
                setNote({
                    title: '',
                    content: ''
                });
                setAlertVisible(true);
                setTimeout(() => {
                    navigate('/'); // Navigate to the list page after 2 seconds
                }, 1000);
                // Redirect or show success message
            })
            .catch(error => {
                console.error('Error creating note:', error);
                // Show error message
            });
    };

    return (
        <>
            {alertVisible && ( // Conditionally render the alert
        <Stack sx={{ width: '100%' }} spacing={2}>
        <Alert severity="success">Note successfully created</Alert>
        </Stack>
                )}
       
        <div className="min-h-screen bg-gradient-to-r from-blue-200 to-blue-400 flex flex-col items-center justify-center">
            <div className="container mx-auto p-8">
                <h2 className="text-3xl font-bold mb-4 text-center text-white">Create New Note</h2>
                <form onSubmit={handleSubmit} className="note-form bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">Title:</label>
                        <input
                            type="text"
                            name="title"
                            value={note.title}
                            onChange={handleChange}
                            className="input-field"
                            placeholder="Enter title"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="content">Content:</label>
                        <textarea
                            name="content"
                            value={note.content}
                            onChange={handleChange}
                            className="input-field h-32"
                            placeholder="Enter content"
                            required
                        />
                    </div>
                    <div className="flex justify-center">
                        <button type="submit" className="create-note-btn">
                            Create Note
                        </button>
                    </div>
                </form>
                <div className="back-to-note-btn-container">
                <Link to="/" className="back-to-note-btn">Back to Notes</Link>
                </div>
            </div>
        </div>
        </>
    );
}

export default CreateNote;
