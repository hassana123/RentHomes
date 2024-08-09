import React from 'react'
import vector from "../assets/vector.png"
import vector1 from "../assets/vector1.png"
import vector2 from "../assets/group.png"
const Services = () => {
  return (
   <section className='w-[90%] mx-auto'>
    <h1 className='text-center my-3 text-primary text-[38px] md:text-[70px]'>See Our Services</h1>
    <p  className='text-center text-[#141E15] text-[22px]' >We Make Finding Rentals Easy, Effortless Search, Endless Choices</p>
   <div className='md:flex md:space-y-0 space-y-5 justify-between text-white text-center  my-10  mx-auto  '>
    <div className='bg-primary mx-5 space-y-2 px-7  py-5 shadow-xl rounded-lg'>
        <img src={vector} className='mx-auto' alt="" />
        <h3 className='uppercase text-[40px] font-bold '>Responsive</h3>
        <p>Our commitment to being responsive means that your concerns and efficient.</p>
    </div>
    <div className='bg-primary mx-5 space-y-2  px-7 py-5 shadow-xl rounded-lg'>
        <img className='mx-auto' src={vector1} alt="" />
        <h3 className='uppercase text-[40px] font-bold '>green</h3>
        <p>Experience the convenience of our responsive platform, ensuring swift communication.</p>
    </div>
    <div  className='bg-primary mx-5 space-y-2  px-7 shadow-xl rounded-lg py-5'>
        <img className='mx-auto' src={vector2} alt="" />
        <h3 className='uppercase text-[40px] font-bold'>security</h3>
        <p>Ensuring swift communication and quick solutions for all your rental needs.</p>
    </div>
   </div>
   </section>
  )
}

export default Services
