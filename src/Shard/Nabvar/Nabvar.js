import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthProvider } from '../../context/AuthContext';

const Nabvar = () => {
    const { user, logOut } = useContext(AuthProvider)
    console.log(user)
    const navigate = useNavigate();
    const hendleLogOut = () => {
        logOut()
            .then(() => {
                toast.success("LogOut Success")
                navigate('/')
            })
            .catch(err => {
                toast.error({ err })

            })
    }
    const navItem = <React.Fragment>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/appointment'>Appointment</Link></li>
        <li><Link to='/review'>Reviews</Link></li>
        <li><Link to='/contact'>Contact Us</Link></li>
        <li> {user?.email}</li>
        {
            user ?
                <>
                    <li><Link onClick={hendleLogOut}>LogOut</Link></li>
                    <li><Link to='/dashbord'>Dashbord</Link></li>
                </>
                : <li><Link to='/login'>Login</Link></li>



        }
    </React.Fragment>
    return (
        <div className="navbar bg-base-100 flex justify-between px-0">
            <div className="navbar-start ">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            navItem
                        }
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl">Doctors Portal</Link>

            </div>
            <label htmlFor="deshbord-drawer" tabIndex={1} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {
                        navItem
                    }
                </ul>
            </div>
        </div>
    );
};

export default Nabvar;