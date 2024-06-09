import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from '../Hooks/useAuth';

const Navbar = () => {
    const [theme, setTheme] = useState('light')
    const { user, logOut } = useAuth()

    const links = <>
        <li><NavLink to='/' className={({ isActive }) => isActive ? ' font-bold border-b-4 p-2 border-[#FF3811]' : 'font-family'}>Home</NavLink></li>
    </>

    const handleToggle = e => {
        if (e.target.checked) {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    }

    useEffect(() => {
        localStorage.setItem('theme', theme)
        const localTheme = localStorage.getItem('theme')
        document.querySelector('html').setAttribute('data-theme', localTheme)
    }, [theme])

    const handleLogOut = () => {
        logOut()
            .than()
            .catch()
    }

    return (
        <div className="container mx-auto">
            <div className="navbar fixed z-10 bg-opacity-30 bg-black text-white container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <div className="">
                        <img className="rounded-3xl w-28 h-10 md:w-36 animate__animated animate__heartBeat" src={'https://i.ibb.co/tDXZDzs/Fast-delivery-1024x548.png'} alt="" />
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex space-x-4 px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end space-x-1">
                    <button className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                            <span className="badge badge-xs bg-[#FF3811] indicator-item"></span>
                        </div>
                    </button>
                    {
                        user && <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={user?.photoURL} alt="" />
                                </div>
                            </div>
                            <ul tabIndex={0} className="mt-3 z-[10] p-4 shadow menu menu-sm text-black dropdown-content bg-base-100 rounded-box w-52 space-y-4">
                                <li className="font-bold text-center">Name: {user.displayName}</li>
                                <Link to='/dashboard'><li className="font-bold text-center border-b-4 border-[#FF3811] p-2 rounded-xl"> Dashboard </li></Link>
                                <button onClick={handleLogOut} className="font-bold border-b-4 border-[#FF3811] p-2 rounded-xl">Log Out</button>
                            </ul>
                        </div> 
                    }
                    <div>
                        {
                            user ? "" : <Link to='/login' className="btn btn-sm font-bold bg-[#FF3811]">Login</Link>
                        }
                    </div>
                    <div className="flex justify-end">
                        <label className="swap swap-rotate">
                            <input onChange={handleToggle} type="checkbox" className="theme-controller" value="dark" />
                            <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>
                            <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;