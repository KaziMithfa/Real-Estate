import React, { useContext } from "react";
import { Link, Navigate, NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const NavBar = () => {
  const { logout, user, loading } = useContext(AuthContext);

  const navLinks = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-blue-400 font-bold border-b-2 border-blue-400 pb-1"
              : "hover:text-blue-400"
          }
          to="/"
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-blue-400 font-bold border-b-2 border-blue-400 pb-1"
              : "hover:text-blue-400"
          }
          to="/updateprofile"
        >
          Update Profile
        </NavLink>
      </li>

      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-blue-400 font-bold border-b-2 border-blue-400 pb-1"
              : "hover:text-blue-400"
          }
          to="/terms"
        >
          Terms & Conditions
        </NavLink>
      </li>
    </>
  );

  const handleLogOut = () => {
    logout()
      .then(() => {
        <Navigate to="/"></Navigate>;
      })
      .catch();
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
        {loading ? (
          <span className="loading loading-spinner loading-lg"></span>
        ) : user ? (
          <>
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar tooltip  tooltip-bottom  "
              data-tip={user.displayName}
            >
              <div className="w-10 rounded-full">
                <img alt="Tailwind CSS Navbar component" src={user.photoURL} />
              </div>
            </div>
            <button onClick={handleLogOut} className="btn sm:mr-2">
              Log Out
            </button>
          </>
        ) : (
          <Link to="/login">
            <button className="btn sm:mr-2">Please Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
