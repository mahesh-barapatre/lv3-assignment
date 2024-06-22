import React from 'react';

const Button = ({ children, onClick, type }) => {
  return (
    <button
        type={type}
      onClick={onClick}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-md"
    >
      {children}
    </button>
  );
};

export default Button;
