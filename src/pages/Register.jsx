import React from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from '../firebase/firebase.init';
const Register = () => {
    const handleRegisterForm = event => {
        event.preventDefault()
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password);
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user);

            }).catch(error => {
                console.log('ERROR', error);

            })

    }
    return (
        <div className='max-w-6xl mx-auto pt-10'>

            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto">
                <div className="text-4xl font-bold text-center">Register Now!</div>
                <form onSubmit={handleRegisterForm} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" required />

                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register Now!</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;