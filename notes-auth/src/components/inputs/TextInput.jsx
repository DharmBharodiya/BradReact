import React from 'react'

function TextInput({handleChange, label,name, value, required=false}) {
  return (
    <div
        className='flex flex-col mb-4'
        >
            <label htmlFor={label} className='font-medium'>{label}</label>
            <input
            type="text"
            name={name}
            value={value}
            onChange={handleChange}
            className='w-full px-2 py-1 border-1 rounded-lg'
            required={required}
            />
        </div>
  )
}

export default TextInput