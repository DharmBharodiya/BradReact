import React, { useEffect, useState } from 'react'
import CryptoCard from './components/CryptoCard'
import CardSelector from './components/CardSelector';
import FilterSearch from './components/FilterSearch';
const API_URL = import.meta.env.VITE_API_URL;
function App() {

  const [coins, setCoins] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [limit, setLimit] = useState(10)
  const [filter, setFilter] = useState("")

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

  const filteredCoins = coins.filter((coin) => {
    return coin.name.toLowerCase().includes(filter) || coin.symbol.toLowerCase().includes(filter);
  })

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
        <FilterSearch
        filter={filter}
        onFilterChange={setFilter}
        />
        <CardSelector
        onLimitChange={setLimit}
        limit={limit}
        />
      </div>

      <div
      className='m-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
      >
        { filteredCoins.length > 0 ? filteredCoins.map((coin) => (

          <CryptoCard
          key={coin.id}
          coin={coin}
          />

        )) : <p className='text-white font-semibold text-lg ml-4'>No such coins found.</p>}
      </div>
    </div>
  )
}

export default App