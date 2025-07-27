import React, { useState } from 'react'

function Rating({
    heading="Rate Your Experience",
    feedbackMessages = ['Terrible', 'Okay','Good', "Nice", "Excellent"],

}) {

    //this method create array using JS method to create an Array
    // it takes two arguments first one is to be an iterable or an array like object, here it is length which helps in defining the number of elements for the array that is being formed
    //the second argument is optional and is a map function 
    // here _ is used as the first argument of the map funtion because there is no current value for the length, and the second argument is the index i, hence we are increasing index one by one,
    // for i = 0, i + 1 => 0 + 1 = 1 similary it'll form an array like [1,2,3,4,5]
  const stars = Array.from({length: 5}, (_, i) => i + 1);

  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)

  return (
    <div
    className='bg-white font-bold px-20 py-15 rounded-md mt-10'
    >
        <h1 className='text-2xl text-blue-900'>{heading}</h1>
        <div
        className='flex justify-between items-center mt-4'
        >
            
            {stars.map((star) => (
                <span
                key={star}
                className={`text-3xl hover:cursor-pointer 
                    ${star <= (hover || rating) ? 'text-yellow-400' : 'text-gray-400'}
                    `}
                onClick={() => setRating(star)}
                onMouseEnter={() => setHover(star)}
                onMouseLeave={() => setHover(0)}
                >
                    {'\u2605'}
                </span>
            ))}
        </div>
        <h1
        className={'text-center mt-2 text-blue-900'}
        >{feedbackMessages[rating - 1]}</h1>
    
    </div>
  )
}

export default Rating