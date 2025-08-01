import { useEffect, useRef, useState } from "react";
import Timer from "./components/Timer";

function App() {

  const [time, setTime] = useState(() => {
    return Number(localStorage.getItem("time")) || 0

  });

  useEffect(() => {
    localStorage.setItem("time",JSON.stringify(time))
  },[time])

  const [isRunning, setIsRunning] = useState(false);

  const timeRef = useRef(null);

  const toggleTimer = () => {
    if(isRunning){
      clearInterval(timeRef.current);
      timeRef.current = null;
    }else{
      timeRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1)
      }, 1000)
    } 

    setIsRunning(!isRunning);
  }

  const resetTimer = () => {
    clearInterval(timeRef.current);
    setTime(0);
    setIsRunning(false);
    timeRef.current = null;
    localStorage.removeItem("time");
  }

  return (

    <Timer
      time={time}
      toggleTimer={toggleTimer}
      resetTimer={resetTimer}
      isRunning={isRunning}
    />
    // <div
    // className='bg-gray-300 max-w-full min-h-screen p-6 flex justify-center items-start'
    // >
    //   <div
    //   className='bg-white w-lg px-4 py-4 rounded-lg text-center'
    //   >
    //     <h1
    //     className=" font-semibold text-3xl"
    //     >⌛Timer: {time}</h1>
    //     <button
    //     className="text-white font-semibold px-4 py-1 bg-green-400 rounded-md mt-4 hover:bg-green-500 transition-all duration-100 cursor-pointer mr-4"
    //     onClick={toggleTimer}
    //     >
    //       {isRunning ? "Pause" : (time > 0) ? "Continue" : "Start"}
    //     </button>

    //      <button
    //     className="text-white font-semibold px-4 py-1 bg-red-400 rounded-md mt-4 hover:bg-red-500 transition-all duration-100 cursor-pointer"
    //     onClick={resetTimer}
    //     >
    //       Reset
    //     </button>
    //   </div>
    // </div>
  )
}

export default App