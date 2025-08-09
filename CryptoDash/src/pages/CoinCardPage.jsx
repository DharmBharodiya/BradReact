import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom';

const API_URL = import.meta.env.VITE_COIN_API_URL;

function CoinCardPage() {

  const {id} = useParams();
  const [coin, setCoin] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

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
      <div className='bg-white'>
        <Link to="/">← Back to Home</Link>
        {loading && <p className='text-red-500'>Loading...</p>}
        {error && <p className='text-red-500'>{error}</p>}
        <div>
          <h1>{coin.name}({coin.symbol})</h1>
          <img src={coin.image.small} />

          <p>{coin.description.en}</p>
        </div>
      </div>
  )
}

export default CoinCardPage;