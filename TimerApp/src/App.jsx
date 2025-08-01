import { useState } from "react";

function App() {

  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const toggleTimer = () => {
    
  }

  return (
    <div
    className='bg-gray-300 max-w-full min-h-screen p-6'
    >
      <div
      className='bg-white px-4 py-2 rounded-lg text-center'
      >
        <h1
        className=" font-semibold text-3xl"
        >⌛Timer: {time}</h1>
        <button
        className="text-white font-semibold px-4 py-1 bg-green-400 rounded-md mt-4 hover:bg-green-500 transition-all duration-100 cursor-pointer"
        onclick={toggleTimer}
        >
          {isRunning ? "Pause" : "Start"}
        </button>
      </div>
    </div>
  )
}

export default App