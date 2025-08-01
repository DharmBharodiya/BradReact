import React, { useRef } from 'react'

function App() {

  const inputRef = useRef(null);

  const handleSubmit = () => {
    // console.log(inputRef)
    inputRef.current.focus();
    inputRef.current.style.backgroundColor = "pink";
    inputRef.current.style.color = "green";
    inputRef.current.setAttribute("placeholder", "this works");
  }
  

  return (
    <div
    className='bg-gray-400 min-h-screen max-w-full p-6'
    >

      <div
      className='bg-white rounded-md px-4 py-2 flex flex-col justify-center items-center shadow-black/10 shadow-lg'
      >
        <div
        className='text-center text-2xl mb-4'
        >
          💌Test Station
        </div>
        <div
        className='flex flex-col'
        >
          <input
          type="text"
          placeholder='Enter text..'
          className='border-2 border-blue-400 px-4 py-1 rounded-md'
          ref={inputRef}
          />
          <button
          className='bg-blue-400 px-3 py-1 rounded-md mt-4 text-white mb-4 shadow-lg shadow-black/20'
          onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>

    </div>
  )
}

export default App