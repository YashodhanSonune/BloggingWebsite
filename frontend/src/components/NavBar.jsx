import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function NavBar() {
  return (
    <div className="w-full px-4 py-4 flex justify-between text-black item-center bg-slate-300">
      <div className="name px-4">
        <img
          className="relative h-16 w-16"
          src="./images/MainSorry.png"
          alt="Logo"
        />
      </div>
      <div className="links flex gap-12 px-4 text-sm">
        <div className="flex gap-4 font-bold text-oswald">
          <Link
            to="/"
            className="flex items-center justify center transition-colors duration-100 ease-in border-[1px] hover:bg-zinc-700 hover:text-white border-zinc-700 rounded-2xl px-4 text-black"
          >
            <div>Home</div>
          </Link>
          <Link
            to="/aboutus"
            className="flex justify-center items-center transition-colors duration-100 ease-in border-[1px] hover:bg-zinc-700 hover:text-white border-zinc-700 rounded-2xl px-4 text-black"
          >
            <div>About Us</div>
          </Link>
          <Link
            to="/signin"
            className="flex items-center justify-center transition-colors duration-100 ease-in border-[1px] hover:bg-zinc-700 hover:text-white border-zinc-700 rounded-2xl px-4 py-1 text-black"
          >
            <div>Sign In</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
