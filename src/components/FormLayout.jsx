import React from 'react';

const FormLayout = ({ greetings, reg }) => {
  return (
    <div className="md:h-[90vh] px-2 py-5 md:space-y-10 md:bg-primary md:text-white md:w-[40%] text-center">
      <span className="text-[40px] mt-10 block">{greetings}</span>
      <h1 className="md:text-[35px] text-[25px]">Rental Journey Begins Here</h1>
      <span className="font-300 text-[15px] block md:text-gray-300">{reg}</span>
    </div>
  );
};

export default FormLayout;
