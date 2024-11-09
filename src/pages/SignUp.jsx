import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import auth from '../firebase/firebase.init';

const SignUp = () => {
    const [success, setSuccess] = useState(false)
    const [errorMassage, setErrorMassage] = useState('')
    const passwordValidation = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    const handleSingUp = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        setErrorMassage('')
        setSuccess(false)
        if (password.length < 6) {
            setErrorMassage('Password should be at least 6 characters')
            return
        }
        if (!passwordValidation.test(password)) {
            setErrorMassage('At least one lowercase letter,At least one uppercase letter,At least one digit number, At least one special character(@#$%), minimum of 8 characters in total.')
            return
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user);
                setSuccess(true)

            }).catch(error => {
                console.log('ERROR', error);
                setErrorMassage(error.message)
            })

    }

    return (
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto">
            <h3 className='text-4xl text-center'>SignUp Now!</h3>
            <form onSubmit={handleSingUp} className="card-body">
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
                    <button className="btn btn-primary">SignUp now</button>
                </div>
            </form>
            {
                errorMassage && <p className='text-red-500'>{errorMassage}</p>
            }
            {
                success && <p className='text-green-500'>SignUp Successfully</p>
            }
        </div>
    );
};

export default SignUp;