import React from 'react'

function AboutPage() {
  return (
    <div className='w-full flex justify-center items-center'>
        <div
        className='bg-[#101010]/80 w-[80%] flex justify-center items-center flex-col rounded-lg p-4 text-white m-4 text-lg'
        >
            <h1 className='font-bold text-4xl text-left justify-start mb-4'>About</h1>
            <div
            className='w-[80%]'
            >
                <p><span className='text-amber-500 italic'>Home of Cryptos,</span> is a simple React App that shows realtime cryptocurrency data, served using CoinGecko API.</p>
                <p>You can explore the top cryptocurrency by market cap, filter by name or symbol, and sort them by price, market cap, and change in last 24-hours.</p>
                <p>This project helps learning about routing, fetching data through API, sorting data, searching through the data, no. of data per page and other important stuff to deal with ReactJS projects in future.</p>
                <p>for more visit <a target='_blank' href='https://dhrm.tech' className='text-blue-400'>this.</a></p>
            </div>
        </div>
    </div>
  )
}

export default AboutPage