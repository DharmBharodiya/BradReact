import React from 'react'

function CardSelector({limit, onLimitChange}) {
  return (
    <div
        className='relative p-1 rounded-sm w-[20%]'
        >
          <label htmlFor='limit' className='text-white mr-1 font-semibold'>Show: </label>
          <select className='bg-[#101010] p-1 rounded-sm text-white' id="limit" value={limit} onChange={(e) => onLimitChange(e.target.value)}>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
          </select>
        </div>
  )
}

export default CardSelector