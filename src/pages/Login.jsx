import React from 'react';
import { NavLink } from 'react-router-dom';
import FormLayout from '../components/FormLayout';
import Form from '../components/Form';

const Login = () => {
  return (
    <main className='capitalize my-10'>
      <div className='md:flex w-[90%] mx-auto space-x-5'>
        <FormLayout greetings={"Welcome Back!"} reg={"Enter your credentials to login"} />
        <section className='md:w-[50%]'>
          <Form formType="login" />
          <div className='space-y-20 my-5'>
            <span className='block text-gray-600'>Forgot Password?</span>
            <span className='block text-center text-gray-800'>
              Don't have an account? 
              <NavLink className="text-primary py-[2px] font-bold border-b border-b-primary mx-1" to="/sign-up">
                Sign Up
              </NavLink>
            </span>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Login;
