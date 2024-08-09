import React from 'react';
import { NavLink } from 'react-router-dom';
import FormLayout from '../components/FormLayout';
import Form from '../components/Form';

const SignUp = () => {
  return (
    <main className='capitalize my-10'>
      <div className='md:flex w-[90%] mx-auto space-x-5'>
        <FormLayout greetings={"Sign Up"} reg={"Create Account"} />
        <section className='md:w-[50%]'>
          <Form formType="signup" />
          <div className='my-5'>
            <span className='block text-center text-gray-800'>
              Already have an account? 
              <NavLink className="text-primary py-[2px] font-bold border-b border-b-primary mx-1" to="/login">
                Login
              </NavLink>
            </span>
          </div>
        </section>
      </div>
    </main>
  );
};

export default SignUp;
