import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Header = () => {

    const { user, logOut } = useContext(AuthContext)

  const links = <>
      <li><NavLink to={'/'}>Home</NavLink></li>
      <li><NavLink to={'/allProducts'}>All Products</NavLink></li>
      <li><NavLink to={'/contact'}>Contact Us</NavLink></li>
      
    </>
  
  const handleLogout = () => {
    logOut()
        .then((result) => {
            // toast.warn("Logged out !")
            console.log('Logged out');
            
        })
        .catch(error => {
            // toast.error("Something Wromg")
            console.log('Something Wromg');
            
            
        })
}

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">eShop</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          {links}
          </ul>
        </div>
        <div className="navbar-end">

        {
                            user ?
                                <>
                                    <div className="w-16 h-16 rounded-full border-2">
                                        <img title={user.displayName} className="w-16 h-16 rounded-full" src={user.photoURL} />
                                    </div>
                                    <Link to='/login' onClick={handleLogout} className='ml-[1em] text-[1.5rem] font-lex font-normal text-[#150b2bb2] border-2 rounded-xl py-[.5em] px-[.8em]'>Logout</Link>
                                </>
                                :
                                <>
                                    <Link to='/login' className='ml-[1em] text-[1.5rem] font-lex font-normal text-[#150b2bb2] border-2 rounded-xl py-[.5em] px-[.8em]'>Login</Link>

                                    <Link to='/register' className='ml-[1em] text-[1.5rem] font-lex font-normal text-[#150b2bb2] border-2 rounded-xl py-[.5em] px-[.8em]'>Register</Link>
                                </>
                        }
          
          {/* <Link to={'/login'} onClick={handleLogout}><button className="btn">Login</button></Link> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
