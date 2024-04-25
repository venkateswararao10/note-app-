// src/components/ViewEditNote.js

import React, { useState, useEffect } from 'react';
import { useParams, Link,useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/ViewEditNote.css';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';



function ViewEditNote() {
    const { id } = useParams();
    const [note, setNote] = useState({});
    const navigate=useNavigate();
    const [alertVisible, setAlertVisible] = useState(false);
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/notes/${id}/`)
            .then(response => {
                setNote(response.data);
            })
            .catch(error => {
                console.error('Error fetching note:', error);
            });
    }, [id]);

    const handleChange = e => {
        const { name, value } = e.target;
        setNote(prevNote => ({
            ...prevNote,
            [name]: value
        }));
    };

    const handleSubmit = e => {
        e.preventDefault();
        axios.put(`http://127.0.0.1:8000/api/notes/${id}/`, note)
            .then(() => {
                console.log('Note updated successfully');
                // Redirect or show success message
                setAlertVisible(true);
                setTimeout(() => {
                    navigate('/'); // Navigate to the list page after 2 seconds
                }, 1000);
                
            })
            .catch(error => {
                console.error('Error updating note:', error);
                // Show error message
            });
    };

    return (
        <>
        {alertVisible && ( // Conditionally render the alert
        <Stack sx={{ width: '100%' }} spacing={2}>
        <Alert severity="success">Note updated successfully</Alert>
        </Stack>
                )}
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-200 to-blue-400">
            <div className="container mx-auto p-8">
                <h1 className="text-3xl font-bold mb-4 text-center">View/Edit Note</h1>
                <form onSubmit={handleSubmit} className="note-form">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Title:</label>
                        <input
                            type="text"
                            name="title"
                            value={note.title}
                            onChange={handleChange}
                            className="input-field"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Content:</label>
                        <textarea
                            name="content"
                            value={note.content}
                            onChange={handleChange}
                            className="input-field"
                        />
                    </div>
                    <div className="text-center">
                        <button
                            type="submit"
                            className="btn btn-primary mr-2"
                        >
                            Save
                        </button>
                        <Link to="/" className="btn btn-secondary">Cancel</Link>
                    </div>
                </form>
                
            </div>
        </div>
        </>
    );
}

export default ViewEditNote;
