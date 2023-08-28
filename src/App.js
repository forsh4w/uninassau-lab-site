import React, { useEffect } from 'react';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Bootstrap CSS:
import 'bootstrap/dist/css/bootstrap.min.css';

// AOS:
import AOS from 'aos';
import 'aos/dist/aos.css';

// components
import HomePage from './pages/HomePage';
import CursosPage from './pages/CursosPage';
import ForumPage from './pages/ForumPage';
import SigaPage from './pages/SigaPage';


function App() {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/cursos" element={<CursosPage />} />
                <Route path="/forum" element={<ForumPage />} />
                <Route path="/siga" element={<SigaPage />} />
            </Routes>
        </Router>
    );
}

export default App;
