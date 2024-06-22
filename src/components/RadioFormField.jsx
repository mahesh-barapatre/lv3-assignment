import { Icon } from '@iconify/react/dist/iconify.js';
import React from 'react';

const RadioFormField = ({question, name, values, onCheckedInfo, onChange, icon}) => {
    return (
        <div className='font-md text-lg m-1 p-1'>
        <label className='flex'>
        <Icon icon={icon} width={32} className='rounded-full'/>
          {question}
        </label>  
        <div className='flex w-full justify-evenly items-center'>
            
        {values.map((value) => (
        <label key={value}>
          <input
            type="radio"
            name={name}
            value={value}
            checked={onCheckedInfo === value}
            onChange={onChange}
          />
          {value}
        </label>
      ))}
        </div>
           
      </div>
    );
}

export default RadioFormField;
