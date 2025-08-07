import React, { useEffect, useState } from 'react'
const API_URL = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"

function App() {

  const [coins, setCoins] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const coinFetch = async () => {
      try{
        const res = await fetch(API_URL);
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

  },[])

  return (
    <div>
      <h1>🪙 Cryto Dash</h1>

      {loading && <p>Loading....</p>}
      {error && <p>{error}</p>}
      <div>
        {coins.map((coin) => (

          <div
          key={coin.id}
          >
            <img src={coin.image} alt={coin.name} />
            <div>
              <h1>{coin.name}</h1>
              <h2>{coin.symbol.toUpperCase()}</h2>
            </div>
            <div>
              <h1>Price: {coin.current_price.toLocaleString()}</h1>
              <p>{coin.price_change_percentage_24h.toFixed(2)}%</p>
              <p>Market Cap: {coin.market_cap.toLocaleString()}</p>
            </div>
          </div>

        ))}
      </div>
    </div>
  )
}

export default App