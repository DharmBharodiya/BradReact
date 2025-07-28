import React from 'react'

function Star({
  rating,
  hover,
  rateFn,
  mouseFn,
  star
}) {
  return (
    <div
    className={`text-4xl hover:cursor-pointer 
                    ${star <= (hover || rating) ? 'text-yellow-400' : 'text-gray-400'}
                  `}
    onClick={() => rateFn(star)}
    onMouseEnter={() => mouseFn(star)}
    onMouseLeave={() => mouseFn(0)}
    >
        {'\u2605'}
    </div>
  )
}

export default Star