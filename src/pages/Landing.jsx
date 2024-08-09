import React from 'react';
import { NavLink } from 'react-router-dom';
import { IoHomeOutline } from 'react-icons/io5';
import Footer from '../components/Footer';

const Landing = () => {
  return (
    <main>
      {/* Navigation */}
      <nav className="w-[90%] ok items-center py-2 mx-auto flex justify-between">
        <h1 className="text-secondary lg:text-[30px] text-[20px] flex space-x-2 items-center">
          <span className="font-bold">RENT</span>HOMES <IoHomeOutline />
        </h1>
        <div className="md:space-x-10 space-x-3 text-secondary text-[20px]">
          <NavLink to="/sign-up">Sign Up</NavLink>
          <NavLink to="/login">Login</NavLink>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="md:flex items-center w-[90%] md:my-20 my-10 mx-auto">
        <div className="space-y-5">
          <p className="md:text-[80px] text-primary text-[45px]">
            Your Rental Journey Begins Here
          </p>
          <p className="md:text-[24px] text-[#141E15] text-[18px]">
            We Make Finding Rentals Easy, Effortless Search, Endless Choices
          </p>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
};

export default Landing;
