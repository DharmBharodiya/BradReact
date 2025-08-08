import React from 'react'

function FilterSearch({filter, onFilterChange}) {
  return (
    <div
    className='w-[100%] mr-4'
    >
        <input
        id="Filter Search"
        placeholder='Search coins....'
        value={filter}
        onChange={(e) => onFilterChange(e.target.value)}
        className='bg-white text-black w-full px-4 py-1 rounded-sm'
        />
    </div>
  )
}

export default FilterSearch