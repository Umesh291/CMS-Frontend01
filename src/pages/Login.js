import axios from 'axios';
import React, { useState } from 'react';
import Header from '../components/Header';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
// import GoogleSign from './Googlesignin';

export default function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const submitForm = (e) => {
        e.preventDefault();
        if (email && password) {
            axios.post("http://localhost:5000/api/auth/login", { email, password }).then(res => {
                console.log(res.data);
                Swal.fire({
                    icon: 'success',
                    title: 'Login successfully',
                    showConfirmButton: false,
                    timer: 1500
                });
                setEmail("");
                setPassword("");
                navigate("/")
            }).catch(err => {
                console.log(err);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!'
                });
            });
        }
    };

    return (
        <>
            <Header />
            <div className='mt-5'>
                <section className='m-auto border p-2 container row d-flex justify-content-center align-items-center'>
                    <div className='col-md-5'>
                        <img
                            style={{ borderRadius: '20px' }}
                            width="100%"
                            height="500px"
                            src='https://images.unsplash.com/photo-1560582861-45078880e48e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9'
                            alt='no image found'
                        />
                    </div>
                    <div className='col-md-5 p-3'>
                        <h1 className='text-center'>Sign In</h1>
                        <form method='post' className='form-group' onSubmit={submitForm}>
                            <label className='mt-2' htmlFor="email">Email:</label>
                            <input
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                required
                                className='form-control'
                                type="email"
                                name="email"
                            />
                            <label className='mt-2' htmlFor="password">Password:</label>
                            <input
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                                required
                                className='form-control'
                                type="password"
                                name="password"
                            />
                            <button type='submit' className='btn btn-success mt-2'>Login</button>
                            &nbsp;&nbsp;
                            <Link to="/register">
                                <span className='text-primary'>Create New ?</span>
                            </Link>
                        </form>
                    </div>
                </section>
            </div>
        </>
    );
}
