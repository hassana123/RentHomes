import React from 'react';

const FormButton = ({ children, variant = 'primary', ...props }) => {
  const baseStyle = 'py-2 font-bold rounded block w-full text-center border ';
  const primaryStyle = 'text-primary bg-white border-primary hover:bg-primary hover:text-white';
  const secondaryStyle = 'text-white bg-primary border-primary hover:bg-white hover:text-primary';

  const buttonStyle = variant === 'primary' ? primaryStyle : secondaryStyle;

  return (
    <button className={`${baseStyle} ${buttonStyle}`} {...props}>
      {children}
    </button>
  );
};

export default FormButton;
