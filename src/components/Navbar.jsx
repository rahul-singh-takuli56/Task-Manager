import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, isAuthenticated, logout, loginWithRedirect } = useAuth0();

  const handleToggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav className="lg:mb-14 bg-gradient-to-r  bg-slate-500 shadow-sm text-black shadow-slate-500 h-[60px">
      <div className="flex lg:justify-between  items-center">
        <div className="flex justify-normal items-center lg:ml-10 ml-2 mt-3 lg:mt-0">
          <img
            src="https://t3.ftcdn.net/jpg/04/85/03/92/360_F_485039217_bIPTCVKc2pBuXECTBHCzkxseSbKvuQNy.jpg"
            alt="image"
            height={40}
            width={45}
          />
          <h1 className="text-2xl  font-semibold pl-2 cursor-pointer">
            Task Manager
          </h1>
        </div>

        <ul className="hidden lg:flex justify-start items-center  gap-10 text-xl font-semibold">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/help">Help</Link>
        </ul>

        <div className="flex items-center justify-between gap-5">
          {isAuthenticated && (
            <p className="text-black/80 font-serif uppercase text-lg">
              Hello: {user.name.slice(0, 15)}
            </p>
          )}
          {isAuthenticated ? (
            <button
              onClick={() => loginWithRedirect()}
              className="hidden lg:block bg-blue-600 py-1.5 px-5 text-white rounded-md mt-1 mb-1 mr-10 text-xl"
            >
              Log In
            </button>
          ) : (
            <button
              onClick={() => logout()}
              className="hidden lg:block bg-blue-600 py-1.5 px-5 text-white rounded-md mt-1 mb-1 mr-10 text-xl"
            >
              Log In
            </button>
          )}
        </div>

        <div className="lg:hidden block absolute right-5 text-center mt-3 ">
          {isOpen ? (
            <ImCross
              onClick={handleToggleMenu}
              className="text-2xl  text-white"
            />
          ) : (
            <FaBars
              onClick={handleToggleMenu}
              className="text-2xl text-white"
            />
          )}
        </div>

        {isOpen ? (
          <div className="bg-gray-800 text-white font-semibold fixed top-0 left-0 bottom-0 w-[65%] px-2 pt-6 duration-400 text-xl">
            <ul>
              <li className="py-3 px-2 hover:text-slate-50">
                <Link to="/">Home</Link>
              </li>
              <li className="py-3 px-2 hover:text-slate-50">
                <Link to="/about">About</Link>
              </li>
              <li className="py-3 px-2 hover:text-slate-50">
                <Link to="/contact">Contact</Link>
              </li>
              <li className="py-3 px-2 hover:text-slate-50">
                <Link to="/help">Help</Link>
              </li>
            </ul>
            <button
              onClick={() => loginWithRedirect()}
              className="mt-10 py-2 px-4 bg-blue-600 rounded-xl hover:text-slate-50 w-[80%] mx-auto block"
            >
              Login
            </button>
          </div>
        ) : (
          " "
        )}
      </div>
    </nav>
  );
};

export default Navbar;
