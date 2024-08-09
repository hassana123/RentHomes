import React from "react";
import { NavLink } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
const Footer = () => {
  return (
    <footer className="w-[90%] mx-auto mt-20">
      <section className="grid md:grid-cols-2 lg:grid-cols-3 space-x-10 text-[18px] text-[#555555]"> 
        <div className="space-y-5 ">
          <h1 className="text-secondary lg:text-[26px] text-[18px] flex space-x-2 items-center">
            <span className="font-bold">RENT</span>HOMES <IoHomeOutline />{" "}
          </h1>
          <span>The best and easiest way to rent homes.</span>
        </div>
        <div className="space-y-5 grid">
          <h3 className="text-primary text-[20px] font-semibold">useful links</h3>
          <NavLink to="/events">Events</NavLink>
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/blog">Blogs</NavLink>
          <NavLink to="/faq">FAQ</NavLink>
        </div>
        <div className="space-y-5 grid">
          <h3 className="text-primary text-[20px] font-semibold">main menu</h3>
          <NavLink to="/about">Home</NavLink>
          <NavLink to="/offers">offers</NavLink>
          <NavLink to="/menus">Menus</NavLink>
          <NavLink to="/reservation">Reservation</NavLink>
        </div>
        <div className="space-y-5 ">
            <h3 className="text-primary text-[20px] font-semibold">Contact Us</h3>
            <p>example@gmail.com</p>
            <p>+235 988 344 900</p>
        </div>
      </section>
      <small className="text-[15px] text-center block  text-[#555555] my-8">Copyright 2024 VScode | All rights reserved</small>
    </footer>
  );
};

export default Footer;
