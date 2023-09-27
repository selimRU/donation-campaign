import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../../assets/Resources/Logo.png'
const Nav = () => {
    return (
        <div className=' max-w-6xl mx-auto px-5 lg:px-0 py-[20px] lg:py-[50px]' >
            <div className=" lg:hidden flex justify-between items-center">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className=" text-sm dropdown-content mt-3 z-[1] p-2 rounded-box w-52">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        isActive ? "underline text-[#FF444A]" : ""
                                    }
                                >Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/donation"
                                    className={({ isActive }) =>
                                        isActive ? "underline text-[#FF444A]" : ""
                                    }
                                >Donation
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/statistics"
                                    className={({ isActive }) =>
                                        isActive ? "underline text-[#FF444A]" : ""
                                    }
                                >Statistics
                                </NavLink>
                            </li>
                        </ul>
                    </div >
                </div >
                <div>
                    <img className='w-[150px] md:w-full' src={logo} alt="" />
                </div>
            </div>
            <div className=' hidden lg:flex lg:flex-row-reverse justify-between items-center'>
                <div>
                    <ul className="flex gap-3">
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive ? "underline text-[#FF444A]" : ""
                                }
                            >Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/donation"
                                className={({ isActive }) =>
                                    isActive ? "underline text-[#FF444A]" : ""
                                }
                            >Donation
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/statistics"
                                className={({ isActive }) =>
                                    isActive ? "underline text-[#FF444A]" : ""
                                }
                            >Statistics
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div>
                    <img className='w-[150px] md:w-full' src={logo} alt="" />
                </div>
            </div>
        </div >
    );
};

export default Nav;