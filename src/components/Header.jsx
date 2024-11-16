import React from "react";
import logo from "../assets/logo.png";
import moment from "moment";

const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-4 py-4">
      <div>
        <img className="w-[300px]" src={logo} alt="" />
      </div>
      <h2 className="text-base-400">Journalism Without Fear And Favour</h2>
      <p>{moment().format("dddd, MMMM Do YYYY")}</p>
    </div>
  );
};

export default Header;
