import React, { useState, useEffect } from 'react';
import {useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

import '../styles/DeleteNote.css';
function DeleteNote() {
    const { id } = useParams();
    const [note, setNote] = useState({  
    });
    const navigate = useNavigate();
    const [alertVisible, setAlertVisible] = useState(false);
    useEffect(() => {
        const fetchNote = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/notes/${id}/`);
                setNote(response.data);
            } catch (error) {
                console.error('Error fetching note:', error);
            }
        };

        fetchNote();
    }, [id]);

    const handleDelete = async () => {
        try {
            await axios.delete(`http://127.0.0.1:8000/api/notes/${id}/`);
            console.log('Note deleted successfully');
            setAlertVisible(true);
                setTimeout(() => {
                    navigate('/'); // Navigate to the list page after 2 seconds
                }, 1000);
        } catch (error) {
            console.error('Error deleting note:', error);
        }
    };

    return (
        <>
        {alertVisible && ( // Conditionally render the alert
        <Stack sx={{ width: '100%' }} spacing={2}>
        <Alert severity="success">Note Deleted successfully</Alert>
        </Stack>
                )}
        <div className="min-h-screen bg-gradient-to-r from-blue-200 to-blue-400 flex flex-col items-center justify-center">
            <div className="container mx-auto p-8">
                <h2 className="text-3xl font-bold mb-4 text-center text-white">Delete Note</h2>
                <div className="note-details bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4">
                    <h3 className="text-xl font-bold mb-4">Are you sure you want to delete this note?</h3>
                    <p className="text-gray-700 mb-4"><strong>Title:</strong> {note.title}</p>
                    <p className="text-gray-700"><strong>Content:</strong> {note.content}</p>
                </div>
                <div className="flex justify-center">
                    <button onClick={handleDelete} className="delete-note-btn mr-4">Delete</button>
                    <Link to="/" className="back-to-notes-btn">Cancel</Link>
                </div>
            </div>
        </div>
        </>
    );
}

export default DeleteNote;
