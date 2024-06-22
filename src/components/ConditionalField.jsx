import React from 'react';

const ConditionalField = ({ label, name, type, value, onChange, error }) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700">{label}:</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full p-2 border border-gray-300 rounded mt-1"
      />
      {error && <span className="text-red-500 text-sm">{error}</span>}
    </div>
  );
};

export default ConditionalField;
