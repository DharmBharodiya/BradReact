import React from 'react'
import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <div
    className='text-white mt-20 flex justify-center items-center flex-col'
    >
        <h1 className='font-black text-6xl mb-2'>404</h1>
        <p className='text-sm w-[80%] text-center mb-2'>Oops! The page you've been looking for does not exist.</p>
        <Link to="/" className='text-blue-500 mb-2'>← Go back to home</Link>
    </div>
  )
}

export default NotFoundPage