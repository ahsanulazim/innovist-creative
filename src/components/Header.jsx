import { FaWhatsapp } from "react-icons/fa";
import { Link, NavLink } from "react-router";
import logo from "/innovist-creative-logo.svg";

const Header = () => {

    const nav = <>
        <li><NavLink to="/" className={({ isActive }) =>
            isActive ? "text-main" : ""}>Home</NavLink></li>
        <li><NavLink to="/projects" className={({ isActive }) =>
            isActive ? "text-main" : ""}>Projects</NavLink></li>
        <li><NavLink to="/getintouch" className={({ isActive }) =>
            isActive ? "text-main" : ""}>Get in touch</NavLink></li>
    </>

    return (
        <header className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {nav}
                    </ul>
                </div>
                <Link to="/" ><img src={logo} alt="Innovate Creative Logo" className="w-full max-h-10" /></Link>
            </div>
            <nav className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {nav}
                </ul>
            </nav>
            <div className="navbar-end">
                <a href="#"> <button className="btn bg-main text-black">
                    <FaWhatsapp className="size-5" />
                    Whatsapp
                </button></a>
            </div>
        </header>
    );
};

export default Header;