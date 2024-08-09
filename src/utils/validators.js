export const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };
  
  export const validatePassword = (password) => {
    // At least 8 characters, including uppercase, lowercase, and a number
    const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    return regex.test(password);
  };
  
  export const validateName = (name) => {
    // Only letters and spaces
    const regex = /^[A-Za-z\s]+$/;
    return regex.test(name);
  };
  export const validatePhone = (phone) => {
    // General international phone number format: starts with + followed by country code and number
    const regex = /^\+?[1-9]\d{1,14}$/;
    return regex.test(phone);
  };