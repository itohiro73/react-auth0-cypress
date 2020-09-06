import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import useKeyboardEvent from '../hooks/useKeyboardEvent'
import { Link } from "react-router-dom";

const AccountDropdown = () => {
  const [open, setOpen] = useState(false);
  const { user, logout } = useAuth0();
  const toggleOpen = () => {
    setOpen(!open);
  }
  const close = () => {
    setOpen(false);
  }

  useKeyboardEvent('Escape', close)

  return (
    <div className="relative">
      <button id="avatar-menu" onClick={toggleOpen} className="relative z-10 block h-8 w-8 rounded-full overflow-hidden border-1 border-gray-400 focus:outline-none focus:border-white">
        <img className="h-full w-full object-cover" src={user.picture} alt={user.name} />
      </button>
      {
        open ?
          <div onClick={close}>
            <button tabIndex={-1} className="fixed inset-0 h-full w-full bg-black opacity-50 cursor-default"/>
            <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-md">
              <Link to="/profile" className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"><button id="profile">Profile</button></Link>
              <button id="logout" onClick={() => {logout({returnTo: window.location.origin})}} className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white">Log Out</button>
            </div>
          </div>
          : <></>
      }
    </div>
  );
};

export default AccountDropdown;