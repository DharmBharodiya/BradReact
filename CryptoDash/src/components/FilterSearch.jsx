import React from 'react'

function FilterSearch({filter, onFilterChange}) {
  return (
    <div
    className='mr-4 flex-1/2'
    >
        <input
            id="filter-search"
            type="search"
            inputMode="search"
            autoCapitalize="off"
            autoCorrect="off"
            autoComplete="off"
            placeholder='Search coins...'
            value={filter}
            onChange={(e) => onFilterChange(e.target.value.toLowerCase())}
            className='bg-white text-black w-full px-4 py-1 rounded-sm'
        />
    </div>
  )
}

export default FilterSearch