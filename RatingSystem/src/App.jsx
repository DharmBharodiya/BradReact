import React from 'react'
import Rating from './components/Rating'

function App() {
  return (
    <div
    className='bg-blue-600 w-full min-h-screen flex justify-center items-center flex-col'
    >
      
      <Rating
      heading={"Rate Dharm The Boss"}
      feedbackMessages={['dharm is god','dharm chic','dharm yours','dharm sexy','dharm so fine']}
      />

      <Rating
      heading={"Rate your experience with dharm"}
      />
    </div>
  )
}

export default App