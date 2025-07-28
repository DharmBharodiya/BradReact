import React from 'react'

function Modal({rating, isOpen, closeModal}) {

  if(!isOpen) return null;

  return (
     <div
        className={`w-full min-h-screen fixed bg-[rgba(0,0,0,0.3)] flex justify-center items-center top-0 left-0`}
            >
            <div
            className='bg-white px-10 py-5 rounded-md shadow-black/10 shadow-xl flex justify-center items-center flex-col w-[300px]'
            >
                <h1 className='text-2xl'>Thank You!</h1>
                <p className='text-md'>You rated us {rating} star{rating > 1 ? "s" : ""}.</p>
                <button
                onClick={closeModal}
                className='bg-red-600 mt-4 text-white px-5 py-2 rounded-md text-sm font-medium cursor-pointer hover:bg-red-800'
                >Close</button>
            </div>
        </div>
  )
}

export default Modal