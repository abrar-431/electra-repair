import { NavLink, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png'
import useAuth from '../Hooks/useAuth';

const Header = () => {
    const { user, logOut, theme, setTheme } = useAuth();
    const location = useLocation();
    const navLinks = <>
        <li><NavLink className={({ isActive }) => isActive ? "btn btn-info" : "btn btn-outline btn-info"} to='/'>Home</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? "btn btn-info" : "btn btn-outline btn-info"} to='/services'>Services</NavLink></li>
        <li>
            {user ?
                <details>
                    <summary className={location.pathname === '/add-service' || location.pathname === '/manage-service' || location.pathname === '/booked-service' || location.pathname === '/todo-service' ?
                        'btn btn-info pt-4'
                        :
                        'btn btn-outline btn-info pt-4'
                    }>
                        Dashboard
                    </summary>
                    <ul className="p-2 z-10 space-y-3">
                        <li><NavLink className={({ isActive }) => isActive ? "btn btn-info" : "btn btn-outline btn-info"} to='/add-service'>Add Service</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? "btn btn-info" : "btn btn-outline btn-info"} to='/manage-service'>Manage Service</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? "btn btn-info" : "btn btn-outline btn-info"} to='/booked-service'>Booked Service</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? "btn btn-info" : "btn btn-outline btn-info"} to='/todo-service'>Service-To-Do</NavLink></li>
                    </ul>
                </details>
                :
                <div></div>
            }
        </li>
    </>

    const handleLogOut = () => {
        logOut()
            .then()
            .catch()
    }


    const handleThemeToggle = e => {
        if (e.target.checked) {
            setTheme('sunset')
        }
        else {
            setTheme('light')
        }
    }
    return (
        <div className='bg-base-300 p-2'>
            <div className="navbar w-5/6 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className={theme === 'sunset' ? "h-5 w-5 text-white" : "h-5 w-5"} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 space-y-4 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                            {
                                user ?
                                    <div className='flex flex-col gap-2 items-center'>
                                        <button onClick={handleLogOut} className='btn btn-info btn-outline w-full'>Logout</button>
                                        <div className="tooltip tooltip-bottom" data-tip={user.displayName}>
                                            <img className='w-10 h-10 rounded-full' src={user.photoURL} alt={user.displayName} />
                                        </div>
                                    </div>
                                    :
                                    <NavLink className={({ isActive }) => isActive ? "btn btn-info" : "btn btn-outline btn-info"} to='/login'>Login</NavLink>
                            }
                        </ul>
                    </div>
                </div>
                <a className="btn btn-ghost text-5xl">
                            <img className='w-20 rounded-lg' src={logo} alt="" />
                        </a>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-4">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ?
                            <div className='md:flex hidden gap-2 items-center'>
                                <button onClick={handleLogOut} className='btn btn-info btn-outline'>Logout</button>
                                <div className="tooltip tooltip-bottom" data-tip={user.displayName}>
                                    <img className='w-10 h-10 rounded-full' src={user.photoURL} alt={user.displayName} />
                                </div>
                            </div>
                            :
                            <NavLink className={({ isActive }) => isActive ? "btn btn-info" : "btn btn-outline btn-info"} to='/login'>Login</NavLink>
                    }
                    <label className="flex cursor-pointer gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                        <input type="checkbox"
                            defaultChecked={theme === 'light' ? false : true}
                            onChange={handleThemeToggle} className="toggle theme-controller" />
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Header;