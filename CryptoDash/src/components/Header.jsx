import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='text-blue-600 font-bold text-xl flex flex-wrap justify-evenly items-center'>
        <h1
        className='text-white font-bold text-2xl m-4'
        >🪙 Home of Cryptos</h1>

        <div>
            <Link to="/" className='mr-4 hover:text-blue-900'>Home</Link>
            <Link to="/about" className='hover:text-blue-900'>About</Link>
        </div>
    </div>
  )
}

export default Header