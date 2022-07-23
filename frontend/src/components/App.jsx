import '../styles/App.css';
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Login from './Login.jsx';
import NotMatch from './NotMatch.jsx';

const App = () => (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotMatch />} />
      </Routes>
    </Router>
);

export default App;
