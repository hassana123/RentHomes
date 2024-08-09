// import React from 'react';

// const InputField = ({ icon: Icon, type, placeholder }) => {
//   return (
//     <div className='border mb-5 flex items-center space-x-3 py-3 px-3 rounded'>
//       {Icon && <Icon className='icon' />}
//       <input type={type} placeholder={placeholder} />
//     </div>
//   );
// };

// export default InputField;

import React from 'react';

const InputField = ({ icon: Icon, type, placeholder, name, value, onChange }) => {
  return (
    <div className='border mb-5 flex space-x-2 items-center py-3 px-3 rounded'>
      {Icon && <Icon className='icon' />}
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        className='w-full  outline-none border-none'
      />
    </div>
  );
};

export default InputField;
