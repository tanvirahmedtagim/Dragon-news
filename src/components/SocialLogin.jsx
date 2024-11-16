import React from "react";
import { FcGoogle } from "react-icons/fc";
import { SiGithub } from "react-icons/si";

const SocialLogin = () => {
  return (
    <div>
      <h2 className="font-semibold mb-3">Login With</h2>
      <div className="flex flex-col gap-3">
        <button className="btn">
          <FcGoogle fontSize="30" /> Login With Google
        </button>
        <button className="btn">
          <SiGithub fontSize="30" /> Login With Github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
