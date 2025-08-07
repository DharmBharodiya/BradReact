import React, { useEffect, useState } from 'react'
import CryptoCard from './components/CryptoCard'
import CardSelector from './components/CardSelector';
const API_URL = import.meta.env.VITE_API_URL;
function App() {

  const [coins, setCoins] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [limit, setLimit] = useState(10)

  useEffect(() => {
    const coinFetch = async () => {
      try{
        const res = await fetch(`${API_URL}&order=market_cap_desc&per_page=${limit}&page=1&sparkline=false`);
        if(!res.ok) throw new Error("Failed to fetch the coins.")

        const data = await res.json()
        console.log(data)
        setCoins(data)

      }catch(err){
        setError(err.message)
      }finally{
        setLoading(false)
      }
    }
    
    coinFetch();
   // OLD WAY OF FETCHING DATA  
    // fetch(API_URL)
    // .then((res) => {
    //   if(!res.ok) throw new Error("Failed to fetch the coins.")

    //     return res.json();
    // })
    // .then((data) => {
    //   console.log(data);
    //   setCoins(data);
    //   setLoading(false);
    // })
    // .catch((err) => {
    //   setError(err.message)
    //   setLoading(false)
    // })

  },[limit])

  return (
    <div
    className='bg-gray-900 p-4'
    >
      <h1
      className='text-white font-bold text-2xl m-4'
      >🪙 Cryto Dash</h1>

      {loading && <p>Loading....</p>}
      {error && <p>{error}</p>}

      <div
      className='controls w-full flex relative p-1 m-4'
      > 
        <CardSelector
        onLimitChange={setLimit}
        limit={limit}
        />
      </div>

      <div
      className='m-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
      >
        {coins.map((coin) => (

          <CryptoCard
          key={coin.id}
          coin={coin}
          />

        ))}
      </div>
    </div>
  )
}

export default App