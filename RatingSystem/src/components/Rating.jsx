import React from 'react'

function Rating() {

    //this method create array using JS method to create an Array
    // it takes two arguments first one is to be an iterable or an array like object, here it is length which helps in defining the number of elements for the array that is being formed
    //the second argument is optional and is a map function 
    // here _ is used as the first argument of the map funtion because there is no current value for the length, and the second argument is the index i, hence we are increasing index one by one,
    // for i = 0, i + 1 => 0 + 1 = 1 similary it'll form an array like [1,2,3,4,5]
  const stars = Array.from({length: 5}, (_, i) => i + 1);

  const handleClick = (index) => {
    console.log("star was clicked", index)
  }

  const hovered = (message) => {
    console.log(message)
  }

  return (
    <div
    className='bg-white font-bold px-20 py-15 rounded-md'
    >
        <h1 className='text-2xl text-blue-900'>Rate Your Experience</h1>
        <div
        className='flex justify-between items-center mt-4'
        >
            {stars.map((star, index) => (
                <span
                key={star}
                className='text-3xl text-gray-400 hover:cursor-pointer'
                onClick={() => handleClick(index + 1)}
                onMouseEnter={() => hovered("entered")}
                onMouseLeave={() => hovered("leave")}
                >
                    {'\u2605'}
                </span>
            ))}
        </div>
    
    </div>
  )
}

export default Rating