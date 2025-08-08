import React from 'react'

function SortSelector({sortBy, onSortByChange}) {
  return (
     <div
        className='relative p-1 rounded-sm left-0 mt-1'
        >
          <label htmlFor='limit' className='text-white mr-1 font-semibold'>Sort: </label>
          <select className='bg-[#101010] p-1 rounded-sm text-white' id="limit" value={sortBy} onChange={(e) => onSortByChange(e.target.value)}>
            <option value="market_cap_desc">Market Cap (High to Low)</option>
            <option value="market_cap_asc">Market Cap (Low to High)</option>
            <option value="price_desc">Price (High to Low)</option>
            <option value="price_asc">Price (Low to High)</option>
            <option value="change_desc">24h Change (High to Low)</option>
            <option value="change_asc">24h Change (Low to High)</option>
          </select>
        </div>
  )
}

export default SortSelector