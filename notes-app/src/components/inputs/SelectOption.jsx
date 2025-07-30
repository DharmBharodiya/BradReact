import React from 'react'

function SelectOption({name, label, handleChange, value, options}) {
  return (
     <div
        className='flex flex-col mb-4'
        >
            <label htmlFor='name' className='font-medium'>{label}</label>
            <select
            name={name}
            value={value}
            onChange={handleChange}
            className='w-full px-2 py-1 border-1 rounded-lg'
            >
                {options.map((option, index) => (
                    <option
                    key={index}
                    value={option.value}
                    >{option.label}</option>
                ))}
            </select>
        </div>

  )
}

export default SelectOption