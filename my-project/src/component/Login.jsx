import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase.init";
import { useRef, useState } from "react";


const Login = () => {
    const emailRef= useRef();

    const [errorLogin, setErrorLogin] = useState('');
    const [successLogin, setSuccessLogin] = useState('');


    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        // reset
        setErrorLogin('');
        setSuccessLogin('');

        console.log(email, password);

        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user)
                setSuccessLogin('Login Successfully !')
            })
            .catch(error => {
                console.log("Error", error)
                setErrorLogin('Email & Password does not match !')
            })
    }

    /// forget or reset password
    const handleForgetPassword=()=>{
        const email=emailRef.current.value;
        sendPasswordResetEmail(auth, email)
        .then(()=>{
            alert('Email send please check your email')
        })
        .catch(error=>{
            console.log('Error',error)
        })
    }




    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleLogin} className="card-body">
                        <fieldset className="fieldset">
                            <label className="fieldset-label">Email</label>
                            <input type="email" ref={emailRef} name="email" className="input" placeholder="Email" />

                            <label className="fieldset-label">Password</label>
                            <input type="password" name="password" className="input" placeholder="Password" />

                            <div>
                                <a onClick={handleForgetPassword} className="link link-hover">Forgot password?</a>
                            </div>

                            <button className="btn btn-neutral mt-4">Login</button>
                        </fieldset>
                        {
                            errorLogin && <p className="text-xl text-red-600">{errorLogin}</p>
                        }
                        {
                            successLogin && <p className="text-green-600 text-xl">{successLogin}</p>
                        }
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;