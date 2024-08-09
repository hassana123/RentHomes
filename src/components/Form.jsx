import React, { useState } from "react";
import InputField from "./InputField";
import { useNavigate } from "react-router-dom";
import FormButton from "./FormButton";
import { useAuth } from "../context/AuthContext";
import {
  IoMailUnreadOutline,
  IoLockClosed,
  IoPersonOutline,
  IoCallOutline,
} from "react-icons/io5";
import {
  validateEmail,
  validatePassword,
  validateName,
} from "../utils/validators";

const Form = ({ formType }) => {
    const navigate= useNavigate()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { signUp, login } = useAuth();

  const isSignUp = formType === "signup";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validateForm = () => {
    const errors = {};

    if (isSignUp) {
      if (!validateName(formData.name)) errors.name = "Invalid name.";
      if (!validateEmail(formData.email))
        errors.email = "Invalid email address.";
      if (!validatePassword(formData.password))
        errors.password =
          "Password must be at least 8 characters long and include uppercase, lowercase, special character and a number.";
      if (formData.password !== formData.confirmPassword)
        errors.confirmPassword = "Passwords do not match.";
    } else {
      if (!validateEmail(formData.email))
        errors.email = "Invalid email address.";
      if (!validatePassword(formData.password))
        errors.password = "Invalid password.";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (validateForm()) {
      const errors = {};
      if (isSignUp) {
        try {
          await signUp(formData.email, formData.password);
          navigate("/login");
        } catch (err) {
            console.log(err);
            
          errors.signUpErr = "Failed to create an account";
        }
      } else {
        try {
          await login(formData.email, formData.password);
          navigate("/home");
        } catch (err) {
            console.log(err);
          errors.loginErr = "Failed to log in";
        }
      }
      setErrors(errors);
      console.log("Form data submitted:", formData);
    }

    setIsSubmitting(false);
    return Object.keys(errors).length === 0;
  };

  return (
    <form className="md:mt-0 mt-10" onSubmit={handleSubmit}>
      {isSignUp ? (
        <>
          {errors.signUpErr && (
            <span className="text-red-500">{errors.signUpErr}</span>
          )}
        </>
      ) : (
        <>
          {errors.loginErr && (
            <span className="text-red-500">{errors.loginErr}</span>
          )}
        </>
      )}
      {isSignUp && (
        <>
          <InputField
            icon={IoPersonOutline}
            type="text"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <span className="text-red-500">{errors.name}</span>}
        </>
      )}
      <InputField
        icon={IoMailUnreadOutline}
        type="email"
        placeholder="Email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      {errors.email && <span className="text-red-500">{errors.email}</span>}
      {isSignUp && (
        <InputField
          icon={IoCallOutline}
          type="tel"
          placeholder="Phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
      )}
      <InputField
        icon={IoLockClosed}
        type="password"
        placeholder="Password"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />
      {errors.password && (
        <span className="text-red-500">{errors.password}</span>
      )}
      {isSignUp && (
        <>
          <InputField
            icon={IoLockClosed}
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && (
            <span className="text-red-500">{errors.confirmPassword}</span>
          )}
        </>
      )}
      <FormButton variant={isSignUp ? "secondary" : "primary"} type="submit">
        {isSignUp ? "Sign Up" : "Login Now"}
      </FormButton>
      {isSignUp && (
        <>
          <span className="block text-center my-5">or</span>
          <FormButton>Login with Google</FormButton>
        </>
      )}
    </form>
  );
};

export default Form;
