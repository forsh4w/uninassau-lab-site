import React, { useEffect } from 'react';
import './App.css';

// Bootstrap CSS:
import 'bootstrap/dist/css/bootstrap.min.css';

// AOS:
import AOS from 'aos';
import 'aos/dist/aos.css';

// components
// import HomePage from './components/HomePage';
// import Header from './components/Header';
// import Footer from './components/Footer';
import HomePage from './components/HomePage';

function App() {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <React.Fragment>
            {/* <Header /> */}

            <HomePage />

            {/* <Footer className="contatos" /> */}

        </React.Fragment>
    );
}

export default App;
