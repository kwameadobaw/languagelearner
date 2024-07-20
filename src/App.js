import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Home from './components/Home';
import { ThemeProvider, ThemeContext } from './ThemeContext';
import './App.css';
import './Auth.css';

function App() {
    const [userName, setUserName] = useState('');

    useEffect(() => {
        const firstName = localStorage.getItem('firstName');
        const username = localStorage.getItem('username');
        if (firstName) {
            setUserName(firstName);
        } else if (username) {
            setUserName(username); // Use username if firstName is not available
        }
    }, []);

    return (
        <ThemeProvider>
            <Router>
                <ThemedApp userName={userName} />
            </Router>
        </ThemeProvider>
    );
}

function ThemedApp({ userName }) {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div className={theme}>
            <nav className="nav">
                <div className="nav-items">
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        {!userName && (
                            <>
                                <li>
                                    <Link to="/signup">Sign Up</Link>
                                </li>
                                <li>
                                    <Link to="/login">Login</Link>
                                </li>
                            </>
                        )}
                        <li>
                            <a href="#about-us">About Us</a>
                        </li>
                    </ul>
                </div>
                <div className="toggle-container">
                    <label className="switch">
                        <input type="checkbox" onChange={toggleTheme} checked={theme === 'dark'} />
                        <span className="slider"></span>
                    </label>
                    {userName && <div className="nav-greeting">Hello {userName}</div>}
                </div>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
            <footer className="footer">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a href="https://x.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faXTwitter} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
            </footer>
        </div>
    );
}

export default App;
