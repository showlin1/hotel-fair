import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../UseAuth/useAuth';

const Navbar = () => {

    const { user, logOut } = useAuth();
    const handleLogOut = () => {
        logOut()
    }
    const styleNav = ({ isActive }) => {
        return {
            fontWeight: isActive ? "bold" : "",
            color: isActive ? "#ef4444" : "",
        };
    }
    const navLinks = <>
        <NavLink style={styleNav} to={'/'}>
            <li className="px-5 py-2">Home</li>
        </NavLink>
        <NavLink style={styleNav} to={'/rooms'}>
            <li className="px-5 py-2">Rooms</li>
        </NavLink>
        <NavLink style={styleNav} to={'/myBookings'}>
            <li className="px-5 py-2">My Booking</li>
        </NavLink>
        <NavLink to={'/aboutUs'} style={styleNav}>
            <li className="px-5 py-2">About Us</li>
        </NavLink>
        <NavLink to={'contactUs'} style={styleNav}>
            <li className="px-5 py-2">Contact Us</li>
        </NavLink>
    </>

    return (
        <div className="bg-back bg-rose-100 border-b-2 fixed z-10 left-0 right-0">
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-lg">
                            {navLinks}
                        </ul>
                    </div>
                    <Link to='/'
                        className=" flex text-2xl text-rose-500 text-center font-black cursor-pointer ">
                        <img width='30' height='50' src="https://i.ibb.co.com/0V532pX/hotel.png" alt="" />
                        Hotel.Fair
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-lg">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ?
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img alt={user?.displayName} src={user?.photoURL} />
                                    </div>
                                </div>
                                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-5 shadow bg-base-100 rounded-box space-y-3">
                                    <span>
                                        <h1 className="text-xl">{user?.displayName}</h1>
                                    </span>
                                    <span>
                                        <h1 className="text-xl">{user?.email}</h1>
                                    </span>
                                    <button onClick={handleLogOut} className="px-8 py-3 bg-rose-400 hover:bg-rose-500 text-white font-medium rounded">Log Out</button>
                                </ul>
                            </div>

                            :
                            <Link to={'/login'} className="px-8 py-3 bg-rose-500  text-white font-medium rounded">Login</Link>
                    }

                </div>
            </div>
        </div>
    );
};

export default Navbar;