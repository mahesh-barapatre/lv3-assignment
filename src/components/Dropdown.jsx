import React from 'react';

const Dropdown = ({ label, name, options, value, onChange, error }) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700">{label}:</label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="w-full p-2 border border-gray-300 rounded mt-1"
      >
        <option value="">Select an option</option>
        {options.map((option, index) => (
          <option key={index} value={option}>{option}</option>
        ))}
      </select>
      {error && <span className="text-red-500 text-sm">{error}</span>}
    </div>
  );
};

export default Dropdown;
