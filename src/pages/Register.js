import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';

export default function SignUp() {
    const [name, setName] = useState("");
    const [email, setemail] = useState("");
    const [password, setPassword] = useState("");
  console.log(email ,password ,name);
  
    const [formErrors, setFormErrors] = useState({});
    const navigate = useNavigate();

    const validateForm = () => {
        const errors = {};
        const nameRegex = /^[a-zA-Z\s]+$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!name.trim()) {
            errors.name = "Name is required";
        } else if (!nameRegex.test(name)) {
            errors.name = "Name can only contain letters and spaces";
        }

        if (!email.trim()) {
            errors.email = "Email is required";
        } else if (!emailRegex.test(email)) {
            errors.email = "Invalid email address";
        }
    

        if (!password.trim()) {
            errors.password = "Password is required";
        } else if (password.length < 6) {
            errors.password = "Password must be at least 6 characters long";
        }


        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const submitForm = (e) => {
        e.preventDefault();

        if (validateForm()) {
            axios.post("http://localhost:5000/api/auth/register",
                 { name , email , password })
                .then(res => {
                    console.log(res.data);
                    const user = JSON.stringify(res.data.user);
                    localStorage.setItem("token", res.data.token);
                    localStorage.setItem("user", user);
                    Swal.fire({
                        icon: 'success',
                        title: 'SignUp Successfully...',
                        showConfirmButton: false,
                        timer: 1500
                    });
                    setemail("");
                    setPassword("");
                    setName("");
                })
                .catch(err => {
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
        <Header/>
            <div className='m-3'>
                <section className='m-auto p-2 border container row d-flex justify-content-center align-items-center'>
                    <div className='col-md-5 p-3'>
                        <h2 className='text-center'>Create Account</h2>
                        <form method='post' className='form-group row' onSubmit={submitForm}>
                            <div>
                                <label className='mt-2' htmlFor='name'>Name:</label>
                                <input
                                    onChange={(e) => setName(e.target.value)}
                                    value={name}
                                    required
                                    className='form-control'
                                    type='text'
                                    placeholder=''
                                />
                            </div>
                            {formErrors.name && <small className='text-danger'>{formErrors.name}</small>}
                            <div>
                                <label className='mt-2' htmlFor="email">email:</label>
                                <input
                                    onChange={(e) => setemail(e.target.value)}
                                    value={email}
                                    required
                                    className='form-control'
                                    type="email"
                                    name="email"
                                />
                            </div>
                            {formErrors.email && <small className='text-danger'>{formErrors.email}</small>}
                            <div className='col-md-6'>
                                <label className='mt-2' htmlFor="password">Password:</label>
                                <input
                                    onChange={(e) => setPassword(e.target.value)}
                                    value={password}
                                    required
                                    className='form-control'
                                    type="password"
                                    name="password"
                                />
                            </div>
                            {formErrors.password && <small className='text-danger'>{formErrors.password}</small>}
                             <button  type='submit' className='btn btn-success mt-2'>Submit</button>
                            &nbsp;&nbsp;
                        </form>
                    </div>
                    <div className='col-md-5'>
                        <img
                            style={{ borderRadius: '20px' }}
                            width="100%"
                            height="450px"
                            src='https://images.unsplash.com/photo-1560582861-45078880e48e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9'
                            alt='no image found'
                        />
                    </div>
                </section>
            </div>
        </>
    );
}
