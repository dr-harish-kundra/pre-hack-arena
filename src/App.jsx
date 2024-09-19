import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../src/components/Home';
import Register from '../src/components/Register';

function App() {
    return (
        <Router>
            <Routes>
                {/* Route for the Home page */}
                <Route path="/" element={<Home />} />

                {/* Route for the Register page */}
                <Route path="/register" element={<Register />} />
            </Routes>
        </Router>
    );
}

export default App;
