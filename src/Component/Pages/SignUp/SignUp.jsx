import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const SignUp = () => {
    const { createUser } = useContext(AuthContext);

    const [signUpError, setSignUpError] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    // const [success, setSuccess] = useState('');

    const handleSignUp = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photoUrl = form.get('photo');
        const email = form.get('email');
        const password = form.get('password')
        console.log(name, photoUrl, email, password);

        //reset error
        setSignUpError('');
        // setSuccess('');

        if (password.length < 6) {
            setSignUpError('Password should be at least 6 charecters or longer');
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setSignUpError('Your password shuould have at least one upper case charecters.');
            return;
        }
        else if (!/[a-z]/.test(password)) {
            setSignUpError('Your password should have at least one lower case charecters.')
            return;
        }


        //create user
        createUser(email, password)
            .then(result => {
                console.log(result.user);
                alert('user Created Successfully.')
            })
            .catch(error => {
                console.error(error);
            })


    }

    return (
        <div className='py-24 px-3 mx-auto'>
            <div>
                <h2 className="text-3xl text-rose-400 font-bold text-center my-10">Please Sign Up</h2>
                <form onSubmit={handleSignUp} className="md:w-3/4 lg:w-1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Name" name="name" className="input input-bordered border-rose-300 focus:outline-rose-500" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" placeholder="Photo URL" name="photo" className="input input-bordered border-rose-300 focus:outline-rose-500" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="Email" name="email" className="input input-bordered border-rose-300 focus:outline-rose-500" required />
                    </div>
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>

                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Password"
                                name="password"
                                className="input input-bordered w-full border-rose-300 focus:outline-rose-500" required />
                            <span className="absolute mt-4 right-4 " onClick={() => setShowPassword(!showPassword)}>
                                {
                                    showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                }
                            </span>
                        </div>

                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-rose-500 hover:bg-rose-300">Sign Up</button>
                    </div>
                </form>
                {
                    signUpError && <p className="text-red-700">{signUpError}</p>
                }
                {/* {
                    success && <p className="text-green-700">{success}</p>
                } */}
                <p className="text-center mt-4 mb-8">Already have an account <Link className="text-rose-400 hover:text-rose-500 font-bold" to='/login'>Login</Link></p>

            </div>
        </div>
    );
};

export default SignUp;