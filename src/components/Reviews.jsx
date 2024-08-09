import React from 'react'
import image from "../assets/image3.png"
import image1 from "../assets/image1.png"
import image2 from "../assets/image2.png"
const Reviews = () => {
  return (
    <section>
         <h1 className='text-center my-3 text-primary text-[38px] md:text-[70px]'>What Customers Say About Our Services</h1>
    <p  className='text-center text-[#141E15] text-[22px]' >We Make Finding Rentals Easy, Effortless Search, Endless Choices</p>
    <div className='md:flex md:space-y-0 space-y-5  justify-between  text-center  my-10  mx-auto  '>
        <div className='  border-[5px] space-y-3 px-5 py-5 border-primary mx-5  rounded-tr-[100px] rounded-bl-[100px] rounded-tl-[20px] rounded-br-[20px]'>
            <img className='w-[50%]  mx-auto rounded-full' src={image} alt="" />
            <h3 className='font-semibold text-primary'>David Anderson</h3>
            <p>“I loved the experience, renting a home was an pleasure. From the communication was seamless and professional”.</p>
        </div>
        <div className='  border-[5px] space-y-3 px-5 py-5 border-primary mx-5  rounded-tr-[100px] rounded-bl-[100px] rounded-tl-[20px] rounded-br-[20px]'>
            <img className='w-[50%]  mx-auto   rounded-full'  src={image1} alt="" />
            <h3 className='font-semibold text-primary'>David Anderson</h3>
            <p>“I loved the experience, renting a home was an pleasure. From the communication was seamless and professional”.</p>
        </div>
        <div className='  border-[5px] space-y-3 px-5 py-5 border-primary mx-5  rounded-tr-[100px] rounded-bl-[100px] rounded-tl-[20px] rounded-br-[20px]'>
            <img className='w-[50%]  mx-auto  rounded-full'  src={image} alt="" />
            <h3 className='font-semibold text-primary'>David Anderson</h3>
            <p>“I loved the experience, renting a home was an pleasure. From the communication was seamless and professional”.</p>
        </div>
    </div>
    </section>
  )
}

export default Reviews
