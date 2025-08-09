import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom';
import Spinner from '../components/Spinner';

const API_URL = import.meta.env.VITE_COIN_API_URL;

function CoinCardPage() {

  const {id} = useParams();
  const [coin, setCoin] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCoin = async () => {
      try{
        console.log(`${API_URL}/${id}`);
        const res = await fetch(`${API_URL}/${id}`);
        if(!res.ok) throw new Error("Cannot fetch the coin details.");

        const data = await res.json();
        console.log(data);
        setCoin(data);
      }catch(err){
        console.log(err);
        setError(err.message);
      }finally{
        setLoading(false);
      }
    }

    fetchCoin();
  },[id])

  return (
    <div className='w-full flex justify-center items-center'>
      <div
      className='bg-white p-6 rounded-md m-6 w-[95%] md:w-[60%]  flex justify-center items-center flex-col'
      >
        <Link to="/" className='text-blue-700 font-semibold'>←Back to Home</Link>
        {/* important to check if coin is loaded or not by coin ? so that if the coin is not loaded it does not stop the app and throw an error, and instead handles it gently. */}
        <h1
        className='font-black text-2xl my-2'
        >{coin ? `${coin.name} (${coin.symbol.toUpperCase()})` : "Coin details not loaded yet.."}</h1>
        
        {loading && <Spinner/>}
        {error && <p>{error}</p>}
      
        {!loading && !error && (
          <>
            <div
            className='coin-details flex flex-col justify-center items-start md:items-center'
            > 
              <img
              src={coin.image.small}
              alt={coin.name}
              className='w-10 h-10 my-2 self-center'
              />

              <p className='w-[95%] md:w-[80%] mb-4'>{coin.description.en.split(".")[0] + ". " + coin.description.en.split(".")[0] + "."}</p>
            
              <h1 className='text-lg md:text-xl'><span className='font-bold'>Rank:</span> #{coin.market_cap_rank}</h1>
              <h1 className='text-lg md:text-xl'><span className='font-bold'>Current Price: </span>${coin.market_data.current_price.usd.toLocaleString()}</h1>
              <h1 className='text-lg md:text-xl'><span className='font-bold'>24h High: </span>${coin.market_data.high_24h.usd.toLocaleString()}</h1>
              <h1 className='text-lg md:text-xl'><span className='font-bold'>24h Low: </span>${coin.market_data.low_24h.usd.toLocaleString()}</h1>
              <h1 className='text-lg md:text-xl'><span className='font-bold'>24h Price Change: </span>${coin.market_data.price_change_24h.toLocaleString()}</h1>
              <h1 className='text-lg md:text-xl'><span className='font-bold'>Ciculating Supply: </span>${coin.market_data.circulating_supply.toLocaleString()}</h1>
              <h1 className='text-lg md:text-xl'><span className='font-bold'>Total Supply: </span>${coin.market_data.total_supply.toLocaleString()}</h1>
              <h1 className='text-lg md:text-xl'><span className='font-bold'>All Time High: </span>${coin.market_data.ath.usd.toLocaleString()} on{" "} {new Date(coin.market_data.ath_date.usd).toLocaleDateString()}</h1>
              <h1 className='text-lg md:text-xl'><span className='font-bold'>All Time Low: </span>${coin.market_data.atl.usd.toLocaleString()} on{" "} {new Date(coin.market_data.atl_date.usd).toLocaleDateString()}</h1>
              <h1 className='text-lg md:text-xl'><span className='font-bold'>Last Updated: </span>{new Date(coin.market_data.last_updated).toLocaleDateString()}</h1>
            </div>
            <div
            className='coin-links flex-col flex text-blue-500 text-xl text-center mt-4'
            >
              <a href={coin.links.homepage} target='_blank' rel="noopener noreferrer">🌐Website</a>
              <a href={coin.links.blockchain_site[0]} target="_blank" rel="noopener noreferrer">🎯Blockchain Explorer</a>
            </div>
            <div className='text-center w-[80%] mt-4'>
        
               { coin.categories.length > 0 && (
                  <p><span className='font-bold text-xl'>Categories: </span>{coin.categories.join(", ")}</p>
                )}
                

            </div>
          </>
        )}
        </div>
  </div>
  )
}

export default CoinCardPage;