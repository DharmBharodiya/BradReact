import React, { useState } from 'react'
import Star from './Star';
import Modal from './Modal';

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

  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  
  const handleSubmit = () => {
    setSubmitted(true);
  }

  const handleClose = () => {
    setSubmitted(false);
    setRating(0)
    setHover(0)
  }


  return (
    <div
    className='bg-white font-bold px-15 py-10 rounded-md mt-10'
    >
        <h1 className='text-2xl text-blue-900'>{heading}</h1>
        <div
        className='flex justify-between items-center mt-4'
        >
            
            {stars.map((star) => (
                // <span
                // key={star}
                // className={`text-3xl hover:cursor-pointer 
                //     ${star <= (hover || rating) ? 'text-yellow-400' : 'text-gray-400'}
                //     `}
                // onClick={() => setRating(star)}
                // onMouseEnter={() => setHover(star)}
                // onMouseLeave={() => setHover(0)}
                // >
                //     {'\u2605'}
                // </span>

                <Star
                key={star}
                star={star}
                rating={rating}
                hover={hover}
                rateFn={setRating}
                mouseFn={setHover}
                />
            ))}
        </div>
        <h1
        className={'text-center text-lg mt-4 text-blue-900'}
        >{feedbackMessages[rating - 1]}</h1>

        <div
        className='flex justify-center items-center mt-2'
        >
            <button
            className={`${rating === 0 ? "bg-gray-600" : "bg-blue-600 hover:bg-blue-800"} text-white px-5 py-2 rounded-md text-sm font-medium cursor-pointer `}
            onClick={handleSubmit}
            disabled={rating === 0}
            >Submit</button>
        </div>
        
        <Modal
        isOpen={submitted}
        closeModal={handleClose}
        rating={rating}
        />
    
    </div>
  )
}

export default Rating