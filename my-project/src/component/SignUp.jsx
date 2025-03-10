import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase.init";
import { useState } from "react";


const SignUp = () => {

    const [error, setError]=useState('');
    const [success, setSuccess]=useState('');

    const handleSignUp=(e)=>{
        e.preventDefault();
        const email=e.target.email.value;
        const password=e.target.password.value;

        console.log(email, password);

        // reset
        setError('')

        // password validation
        if(password.length <6){
            setError('Please Provide at least 6 character!')
            return;
        }
        // strong validation for password
        const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{6,}$/;

        if(!passwordRegex.test(password)){
            setError('Password must be one uppercase, one lowercase, one number and one special character !')
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
        .then((result)=>{
            console.log(result.user);
            setSuccess('Sign Up Successfully !')
        })
        .catch(error=>{
            console.log('Error',error.message);
            setError('Email is already created')
        })
    }


    return (
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto my-6">
            <form onSubmit={handleSignUp} className="card-body">
                <h2 className="text-3xl text-center">Sign Up</h2>
                <fieldset className="fieldset">
                    <label className="fieldset-label font-bold">Email</label>
                    <input type="email" name="email" className="input" placeholder="Email" />

                    <label className="fieldset-label font-bold">Password</label>
                    <input type="password" name="password" className="input" placeholder="Password" />


                    <button className="btn btn-neutral mt-4">Sign Up</button>
                </fieldset>

                {
                    error && <p className="text-red-500 text-xl">{error}</p>
                }
                {
                    success && <p className="text-green-600 text-xl">{success}</p>
                }
            </form>
        </div>

    );
};

export default SignUp;