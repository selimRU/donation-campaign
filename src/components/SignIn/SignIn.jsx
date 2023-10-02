import React, { useContext, useState } from 'react';
import { Context } from '../AuthContext/AuthContext';
import { Link } from 'react-router-dom';
import { BsEyeSlashFill, BsEyeSlash } from 'react-icons/bs';
const SignIn = () => {
    const { createUser } = useContext(Context)
    const [error, setError] = useState('')
    const [showPass, setShowPass] = useState(false)

    const handleSignUp = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;

        if (password.length < 6) {
            setError('Password length must be at least 6')
            return;
        }
        if (!/[@$!%*?&]/.test(password)) {
            setError('You have to use a special characters')
            return
        }
        if (!/[A-Z]/.test(password)) {
            setError('You have to use an uppercase')
            return;
        }
        createUser(email, password)
            .then(res => {
                console.log(res.user);
            })
            .catch(error => console.log(error.message))
    }

    const handleShowPass = () => {
        setShowPass(!showPass)
    }
    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Sign in to your account
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form onSubmit={handleSignUp} className="space-y-6" action="#" method="POST">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                            Email address
                        </label>
                        <div className="mt-2">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className=" px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                Password
                            </label>
                        </div>
                        <div className="mt-2 relative">
                            {
                                showPass ?
                                    <input
                                        id="password"
                                        name="password"
                                        type="text"
                                        autoComplete="current-password"
                                        required
                                        className=" px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    /> :
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        required
                                        className=" px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                            }
                            {showPass ?
                                <BsEyeSlash onClick={handleShowPass} className=' absolute right-0 bottom-[10px] mr-3 text-lg'></BsEyeSlash> :
                                <BsEyeSlashFill onClick={handleShowPass} className=' absolute right-0 bottom-[10px] mr-3 text-lg'></BsEyeSlashFill>
                            }
                        </div>
                        <p className=' text-red-600 mt-3'>{error}</p>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>
            <p className=' text-center mt-3'>Already have an account? <Link to='/login'><span className=' text-blue-600 ml-5 underline'>logIn</span></Link></p>
        </div>
    );
};

export default SignIn;