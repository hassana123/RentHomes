import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IoArrowBack} from 'react-icons/io5';

const FormLayout = ({ greetings, reg }) => {
  const navigate = useNavigate();

  return (
    <div className="md:h-[90vh] px-2 py-5 md:space-y-10 md:bg-primary md:text-white md:w-[40%] text-center">
     <IoArrowBack onClick={()=>navigate("/")} className='cursor-pointer text-[24px] mx-5 md:text-white text-black'/>
      <span className="text-[40px] mt-10 block">{greetings}</span>
      <h1 className="md:text-[35px] text-[25px]">Rental Journey Begins Here</h1>
      <span className="font-300 text-[15px] block md:text-gray-300">{reg}</span>
    </div>
  );
};

export default FormLayout;
