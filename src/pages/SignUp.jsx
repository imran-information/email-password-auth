import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import auth from '../firebase/firebase.init';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [success, setSuccess] = useState(false)
    const [errorMassage, setErrorMassage] = useState('')
    const [showPassword, setShowPassword] = useState(false);


    const passwordValidation = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    const handleSingUp = e => {
        console.log('clicking')
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        const checkbox = e.target.checkbox.checked;

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
        if (!checkbox) {
            setErrorMassage('please checkbox')
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
                <div className="form-control relative">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type={showPassword ? 'text' : "password"} name='password' placeholder="password" className="input input-bordered" required />
                    <button onClick={() => setShowPassword(!showPassword)} className='btn btn-xs absolute right-3 top-12'>
                        {
                            showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                        }
                    </button>
                </div>
                <div className="form-control">
                    <label className="label cursor-pointer justify-start">
                        <input name='checkbox' type="checkbox" className="checkbox checkbox-primary" />
                        <span className="label-text ms-2">Accept all</span>
                    </label>
                </div>
                <div className="form-control mt-6 ">
                    <button className="btn btn-primary">SignUp now</button>
                </div>
            </form>
            {
                errorMassage && <p className='text-red-500 text-center pb-2'>{errorMassage}</p>
            }
            {
                success && <p className='text-green-500 text-center pb-2'>SignUp Successfully</p>
            }
            <p>Already account <Link className='text-green-400' to="/login">Login</Link></p>
        </div>
    );
};

export default SignUp;