import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import AccountDropdown from "./AccountDropdown";
import { Link } from "react-router-dom";


const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { user, logout } = useAuth0();
  const toggleOpen = () => {
    setOpen(!open)
  }
  return (
    <header className="bg-gray-900 sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3">
      <div className="flex items-center justify-between px-4 py-3 sm:p-0">
        <div>
          <a href={"/"} className="text-xl text-white font-body">Auth0/Cypress React</a>
        </div>
        <div className="sm:hidden">
          <button id="hamburger-menu" onClick={toggleOpen} type="button" className="block text-gray-500 hover:text-white focus:text-white focus:outline-none">
            <svg className="h-8 w-8 fill-current" viewBox="0 0 24 24">
              {
                open ?
                <path fillRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"/>
                :
                <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
              }
            </svg>
          </button>
        </div>
      </div>
      <nav className={(open ? "block" : "hidden") + " sm:block"}>
        <div className="px-2 pt-2 pb-4 sm:flex sm:p-0">
          <Link to="/menu1" className="block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800">Menu1</Link>
          <Link to="/menu2" className="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800 sm:m-0 sm:ml-2">Menu2</Link>
          <Link to="/menu3"  className="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800 sm:m-0 sm:ml-2">Menu3</Link>
          <div className="hidden sm:block sm:ml-6">
            <AccountDropdown />
          </div>
        </div>
        <div className="px-4 py-5 border-t border-gray-800 sm:hidden">
          <button id="avatar-menu-mobile" className="flex items-center">
            <img className="h-8 w-8 border-1 border-gray-400 rounded-full object-cover" src={user.picture} alt={user.name}/>
            <span className="ml-3 font-semibold text-white">{user.name}</span>
          </button>
          <div className="mt-4">
            <Link to="/profile" className="block text-gray-400 hover:text-white"><button id="profile-mobile">Profile</button></Link>
            <button id="logout-mobile" onClick={() => {logout({returnTo: window.location.origin})}} className="mt-2 block text-gray-400 hover:text-white">Log Out</button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;