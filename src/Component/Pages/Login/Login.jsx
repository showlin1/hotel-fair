import React, { useContext } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';

const Login = () => {
    const { signIn, handleGoogleSignIn, handleGithubSignIn } = useContext(AuthContext);

    const handleLogin = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                console.log(result.user);
                alert('login Successfully');
            })
            .catch(error => {
                console.error(error);
                alert('not match in user email or password');
            })
    }
    return (
        <div className='py-24 px-3 mx-auto'>
            <h2 className="text-3xl text-rose-400 font-bold text-center my-10">Please Login</h2>
            <form onSubmit={handleLogin} className="md:w-3/4 lg:w-1/2 mx-auto">
                <div className="form-control">
                    <label className="label ">
                        <span className="label-text ">Email</span>
                    </label>
                    <input type="email" placeholder="Email" name="email" className="input input-bordered border-rose-300 focus:outline-rose-500" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" placeholder="Password" name="password" className="input input-bordered border-rose-300 focus:outline-rose-500" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn bg-rose-500 hover:bg-rose-300">Login</button>
                </div>
                <div className="form-control mt-6">
                    <p className="text-2xl text-center">or</p>
                </div>
                <div className="form-control mt-6">
                    <button onClick={handleGoogleSignIn} className="btn bg-rose-500 hover:bg-rose-300">Google Login</button>
                </div>
                <div className="form-control mt-6">
                    <button onClick={handleGithubSignIn} className="btn bg-rose-500 hover:bg-rose-300">GitHub Login</button>
                </div>
            </form>
            <p className="text-center mt-4 mb-8">Do not have an account <Link to='/signUp' className="text-rose-400 hover:text-rose-500 font-bold">Sign Up</Link></p>
            
        </div>
    );
};

export default Login;