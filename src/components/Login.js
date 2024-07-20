import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from '../ThemeContext';
import '../Auth.css';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const { theme } = useContext(ThemeContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/login', { username, password });
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('firstName', response.data.firstName); // Assuming `firstName` is returned
            localStorage.setItem('username', username); // Store username
            alert('Logged in successfully');
            navigate('/');
        } catch (error) {
            if (error.response) {
                setError(error.response.data.message);
            } else {
                setError('An unexpected error occurred');
            }
        }
    };

    return (
        <div className={`auth-container ${theme}`}>
            <div className="auth-form">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit">Login</button>
                </form>
                {error && <p>{error}</p>}
            </div>
        </div>
    );
}

export default Login;