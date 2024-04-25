// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import NoteList from './components/NoteList';
import ViewEditNote from './components/ViewEditNote';
import CreateNote from './components/CreateNote';
import DeleteNote from './components/DeleteNote';
  

function App() {
    return (
        <Router>
            


            
            <Routes>
                <Route exact path="/" element={<NoteList/>} />
                <Route exact path="/view/:id" element={<ViewEditNote/>} />
                <Route exact path="/create" element={<CreateNote/>} />
                <Route exact path="/delete/:id" element={<DeleteNote/>} />
                </Routes>
          
            
        </Router>
    );
}

export default App;
