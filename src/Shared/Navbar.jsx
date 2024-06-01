import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const [theme, setTheme] = useState('light')


    const links = <>
        <li><NavLink to='/' className={({ isActive }) => isActive ? ' font-bold border-b-4 p-2 border-[#FF3811]' : 'font-family'}>Home</NavLink></li>
        <li><NavLink to='/allBook' className={({ isActive }) => isActive ? ' font-bold border-b-4 p-2 border-[#FF3811]' : 'font-family'}>All BooK</NavLink></li>

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

    return (
        <div className="navbar container mx-auto bg-base-100">
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
                    <img className=" w-20 md:w-28 animate__animated animate__heartBeat" src={'https://i.ibb.co/0Z5gYTY/book-logo-design-removebg-preview.png'} alt="" />

                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="flex space-x-4 px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <button className="btn btn-ghost btn-circle">
                    <div className="indicator">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                        <span className="badge badge-xs bg-[#FF3811] indicator-item"></span>
                    </div>
                </button>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src={"https://i.ibb.co/0G1BfzS/rafaul.jpg"} alt="" />
                        </div>
                    </div>
                    <ul tabIndex={0} className="mt-3 z-[10] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box">

                        <div className="flex flex-col justify-center max-w-xs p-2 rounded-xl sm:px-12 dark:bg-gray-50 dark:text-gray-800 w-80">
                            <img src={"https://i.ibb.co/0G1BfzS/rafaul.jpg"} alt="" className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square" />
                            <div className="space-y-4 text-center divide-y dark:divide-gray-300">
                                <div className="my-2 space-y-1">
                                    <h2 className="text-xl font-semibold sm:text-2xl">Rafaul Goni Ansari</h2>
                                    <p className="px-2 text-xs sm:text-base dark:text-gray-600">gmail: rafaulgoni787898@gmail.com</p>
                                </div>
                                <div className="flex justify-center pt-2 space-x-4 align-center">
                                    <button className="btn btn-sm font-bold bg-[#FF3811] w-full">Log out</button>
                                </div>
                            </div>
                        </div>
                    </ul>
                </div>
                <div>
                    <Link to ='/login' className="btn btn-sm font-bold bg-[#FF3811]">Login</Link>
                </div>
                <div className="flex justify-end">
                    <label className="cursor-pointer grid place-items-center">
                        <input onChange={handleToggle} type="checkbox" value="dark" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
                        <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                        <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Navbar;