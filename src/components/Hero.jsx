import React from "react";
import image from "../assets/Freshnuts.png";
import image1 from "../assets/image.png";
const Hero = () => {
  return (
    <>
      <section className="md:flex items-center w-[90%] md:my-0 my-20 mx-auto ">
        <div className="space-y-5">
          <p className="md:text-[80px] text-primary text-[45px]">
            Your Rental Journey Begins Here
          </p>
          <p className="md:text-[24px] text-[#141E15] text-[18px]">
            We Make Finding Rentals Easy, Effortless Search, Endless Choices
          </p>
          <div className="space-x-5 my-10 font-semibold">
            <button className="  bg-primary text-white capitalize  px-10 py-3 rounded-[100px] ">
              rent now
            </button>
            <button className="border-[1px] capitalize text-primary rounded-[100px] border-primary px-10 py-3">
              Rent your place
            </button>
          </div>
        </div>
        <img className="md:w-[40%]" src={image} alt="" />
      </section>
      <section  className="md:flex items-center w-[90%] md:my-10 my-20 mx-auto space-x-10 ">
        <img className="md:w-[40%]" src={image1} alt="" />
        <div className="space-y-5">
          <p className="md:text-[70px] text-primary text-[38px]" >Begin your awesome journey</p>
          <p className="md:text-[20px] text-[#141E15] text-[18px]" >
            Looking for the perfect home to rent? Our user-friendly house rental
            website makes your search a breeze. Browse through a diverse range
            of listings, From cozy apartments to spacious family houses.{" "}
          </p>
          <p  className="md:text-[20px] text-[#141E15] text-[18px]">
            With detailed descriptions, vivid photos, and handy filters, finding
            your ideal rental is just a click away.{" "}
          </p>
          <button  className="text-white text-[25px] bg-primary px-10 rounded-[100px] py-3">Continue</button>
        </div>
      </section>
    </>
  );
};

export default Hero;
