import React from 'react';
import {Link} from "react-router-dom";

function CryptoCard({coin}) {
  return (
   <Link to={`/coin/${coin.id}`}>
        <div
          key={coin.id}
          className='bg-[#101010] text-white rounded-md p-4 hover:scale-102 transition-all duration-150 cursor-pointer hover:shadow-2xl shadow-black/50'
          >
            <div
            className='flex h-10 mb-2'
            >
                <img src={coin.image} alt={coin.name} className='w-8 h-8 mr-3 relative top-50% translate-y-[20%]'/>
              <div>
                <h1 className='font-bold text-xl leading-5.5'>{coin.name}</h1>
                <h2 className='font-semibold text-md'>{coin.symbol.toUpperCase()}</h2>
              </div>
            </div>
            <div>
              <h1><span className='font-semibold'>Price: </span>${coin.current_price.toLocaleString()}</h1>
              <p
              className={coin.price_change_percentage_24h < 0 ? "text-red-500" : "text-green-500"}
              ><span className='mr-1'>{coin.price_change_percentage_24h < 0 ? "▼" : "▲"}</span>{coin.price_change_percentage_24h.toFixed(2)}%</p>
              <p><span className='font-semibold'>Market Cap: </span>{coin.market_cap.toLocaleString()}</p>
            </div>
          </div>
   </Link>
  )
}

export default CryptoCard