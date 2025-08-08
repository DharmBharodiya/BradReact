import React, { useEffect, useState } from 'react'
const API_URL = import.meta.env.VITE_API_URL;
import {Routes, Route} from "react-router-dom";
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import Header from './components/Header';
import NotFoundPage from './pages/NotFoundPage';



function App() {

  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [limit, setLimit] = useState(16);
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

  
  return (
   <>
    <Header/>
    <Routes>
        <Route path='/' element={<HomePage
            coins={coins}
            loading={loading}
            error={error}
            limit={limit}
            filter={filter}
            sortBy={sortBy}
            setLimit={setLimit}
            setSortBy={setSortBy}
            setFilter={setFilter}
        />}/>
        <Route
        path='/about' element={<AboutPage/>}
        />
        <Route path='*' element={<NotFoundPage/>}/>
    </Routes>

   </>
  )
}

export default App