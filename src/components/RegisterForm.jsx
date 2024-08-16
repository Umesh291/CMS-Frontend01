import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const RegisterForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('/api/auth/register', { name, email, password });
            Swal.fire({
                title: 'Registration Successful!',
                text: 'You have successfully registered.',
                icon: 'success',
                confirmButtonText: 'OK'
            });
            // Redirect to login or other page after success
        } catch (error) {
            Swal.fire({
                title: 'Registration Failed',
                text: 'Please check your details and try again.',
                icon: 'error',
                confirmButtonText: 'Retry'
            });
        }
    };

    return (
        <form onSubmit={handleSubmit} className="form">
            <label>Name:</label>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />

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

            <button type="submit">Register</button>
        </form>
    );
};

export default RegisterForm;
