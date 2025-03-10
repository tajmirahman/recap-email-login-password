

const SignUp = () => {

    const handleSignUp=(e)=>{
        e.preventDefault();
        const email=e.target.email.value;
        const password=e.target.password.value;

        console.log(email, password);
    }


    return (
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto my-6">
            <form onSubmit={handleSignUp} className="card-body">
                <fieldset className="fieldset">
                    <label className="fieldset-label font-bold">Email</label>
                    <input type="email" name="email" className="input" placeholder="Email" />

                    <label className="fieldset-label font-bold">Password</label>
                    <input type="password" name="password" className="input" placeholder="Password" />

                    <div><a className="link link-hover">Forgot password?</a></div>

                    <button className="btn btn-neutral mt-4">Sign Up</button>
                </fieldset>
            </form>
        </div>

    );
};

export default SignUp;