import React from "react";
import { Link, NavLink } from "react-router-dom";
import userImg from "../assets/user.png";

const Navbar = () => {
  return (
    <div className="flex justify-between py-5 items-center ">
      <div></div>
      <div className=" flex gap-5 ">
        <Link to="/">Home</Link>
        <Link to="/">About</Link>
        <Link to="/">Career</Link>
      </div>
      <div className="flex gap-3 justify-center items-center">
        <div>
          <img className="h-8 w-8" src={userImg} alt="" />
        </div>
        <button className="btn btn-neutral ">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
