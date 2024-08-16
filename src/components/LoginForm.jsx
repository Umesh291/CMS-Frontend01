import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('/api/auth/login', { email, password });
            Swal.fire({
                title: 'Login Successful!',
                text: 'You have successfully logged in.',
                icon: 'success',
                confirmButtonText: 'OK'
            });
            // Redirect to dashboard or other page after success
        } catch (error) {
            Swal.fire({
                title: 'Login Failed',
                text: 'Please check your credentials and try again.',
                icon: 'error',
                confirmButtonText: 'Retry'
            });
        }
    };

    return (
        <form onSubmit={handleSubmit} className="form">
            <label>Email:</label>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />

            <label>Password:</label>
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />

            <button type="submit">Login</button>
        </form>
    );
};

export default LoginForm;
