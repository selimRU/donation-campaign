import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../../assets/Resources/Logo.png'
const Nav = () => {
    return (
        <div>
            <div className=' flex flex-col md:flex-row lg:flex-row items-center gap-10 md:justify-between lg:justify-between lg:max-w-6xl mx-auto pt-10 px-5'>
                <img src={logo} alt="" />
                <div className='flex gap-4 text-lg'>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? "underline text-[#FF444A]" : ""
                        }
                    >Home
                    </NavLink>
                    <NavLink
                        to="/donation"
                        className={({ isActive }) =>
                            isActive ? "underline text-[#FF444A]" : ""
                        }
                    >Donation
                    </NavLink>
                    <NavLink
                        to="/statistics"
                        className={({ isActive }) =>
                            isActive ? "underline text-[#FF444A]" : ""
                        }
                    >Statistics
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Nav;