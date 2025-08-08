import React, { useEffect, useState } from 'react'
import CryptoCard from './components/CryptoCard'
import CardSelector from './components/CardSelector';
import FilterSearch from './components/FilterSearch';
import SortSelector from './components/SortSelector';
const API_URL = import.meta.env.VITE_API_URL;
function App() {

  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [limit, setLimit] = useState(10);
  const [filter, setFilter] = useState("");
  const [sortBy, setSortBy] = useState("market_cap_desc");

  useEffect(() => {
    const coinFetch = async () => {
      try{
        const res = await fetch(`${API_URL}&order=${sortBy}&per_page=${limit}&page=1&sparkline=false`);
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

  // the slice() method with no argument creates a shallow new copy or the array, with all the elements
  const normalizedFilter = (filter || "").toLowerCase().trim();
  const filteredCoins = coins.filter((coin) => {
    return (
      coin.name.toLowerCase().includes(normalizedFilter) ||
      coin.symbol.toLowerCase().includes(normalizedFilter)
    );
  })
  .slice()
  .sort((a,b) => {
      switch(sortBy){
        case 'market_cap_asc':
          return a.market_cap - b.market_cap;
        case 'market_cap_desc':
          return b.market_cap - a.market_cap;
        case 'price_asc':
          return a.current_price - b.current_price;
        case 'price_desc':
          return b.current_price - a.current_price;
        case 'change_asc':
          return a.price_change_percentage_24h - b.price_change_percentage_24h;
        case 'change_desc':
          return b.price_change_percentage_24h - a.price_change_percentage_24h;
      }
  })

  return (
    <div
    className='bg-gray-900 p-4'
    >
      <h1
      className='text-white font-bold text-2xl m-4'
      >🪙 Home of Cryptos</h1>

      {loading && <p>Loading....</p>}
      {error && <p>{error}</p>}

      <div
      className='controls flex p-1 m-4 justify-evenly'
      > 
        <FilterSearch
        filter={filter}
        onFilterChange={setFilter}
        />
        <SortSelector
        onSortByChange={setSortBy}
        sortBy={sortBy}
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