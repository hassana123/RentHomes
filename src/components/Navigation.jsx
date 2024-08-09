import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { NavLink,  useNavigate } from "react-router-dom";
import { IoHomeOutline, IoMenuOutline, IoCloseSharp } from "react-icons/io5";
const Navigation = () => {
  const navigate= useNavigate()
  const { logout } = useAuth();
  const [open, setOpen] = useState(false);
  console.log(open);
  const handleLogout=  async ()=>{
    try {
      await logout();
      navigate("/");
    } catch (err) {
        console.log(err);
    }
  }
  return (
    <nav className="w-[90%] capitalize items-center py-2  mx-auto flex justify-between">
      <h1 className="text-secondary lg:text-[46px] text-[28px] flex space-x-2 items-center">
        <span className="font-bold">RENT</span>HOMES <IoHomeOutline />{" "}
      </h1>

      <div className="md:block hidden lg:w-[50%] font-700 space-x-10 text-secondary text-[20px]">
        <NavLink  to="/Home">Home</NavLink>
        <NavLink to="/about">About Us</NavLink>
        <NavLink to="/services">Services</NavLink>
        {/* <NavLink to="/contact">Contact us</NavLink> */}
        <button onClick={handleLogout}>Logout</button>
      </div>
      {open ? (
        <>
          <IoCloseSharp
            onClick={() => setOpen(!open)}
            className="md:hidden text-secondary block  text-[38px]"
          />
          <div className="md:hidden bg-secondary py-10 px-3 block w-[60%] space-y-10 absolute top-[10%]
           font-700 grid text-white text-[24px] right-[0%]">
            <NavLink to="/Home">Home</NavLink>
            <NavLink to="/about">About Us</NavLink>
            <NavLink to="/services">Services</NavLink>
            {/* <NavLink to="/contact">Contact us</NavLink> */}
            <button>Logout</button>
            <button onClick={handleLogout}>Logout</button>
          </div>
        </>
      ) : (
        <IoMenuOutline
       
          onClick={() => setOpen(!open)}
          className="md:hidden block   text-[38px]"
        />
      )}
    </nav>
  );
};

export default Navigation;
