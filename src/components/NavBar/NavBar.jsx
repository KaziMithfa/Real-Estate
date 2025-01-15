import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const NavBar = () => {
  const { logout, user } = useContext(AuthContext);

  const navLinks = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>

      <li>
        <Link to="/updateprofile">Update Profile</Link>
      </li>

      <li>
        <Link to="/login">Login</Link>
      </li>
    </>
  );

  const handleLogOut = () => {
    logout().then().catch();
  };

  return (
    <div className="navbar bg-base-100 fixed z-10">
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
            {navLinks}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Real Estate</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar tooltip  tooltip-bottom "
              data-tip={user.displayName}
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <button onClick={handleLogOut} className="btn">
              Log Out
            </button>
          </>
        ) : (
          <Link to="/login">
            <button className="btn">Please Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
