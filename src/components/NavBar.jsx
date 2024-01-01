import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const NavBar = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  const handleLogOut = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="absolute w-full p-4 flex items-center justify-between z-50">
      <Link to="/">
        <h1 className="uppercase text-red-600 font-nsans-bold cursor-pointer lg:text-5xl sm:text-4xl">
          Netflix
        </h1>
      </Link>

      {user?.email ? (
        <div>
          <Link to="/profile">
            <button className="pr-4 text-sm lg:text-base">Profile</button>
          </Link>
          <button onClick={handleLogOut} className="bg-red-600 px-6 py-2 rounded cursor-pointer text-sm lg:text-base sm:px-4,py-1">
            Logout
          </button>
        </div>
      ) : (
        <div>
          <Link to="/login">
            <button className="pr-4 text-sm lg:text-base">Login</button>
          </Link>
          <Link to="/signup">
            <button className="bg-red-600 px-6 py-2 rounded cursor-pointer text-sm lg:text-base sm:px-4,py-1">
              SignUp
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default NavBar;
