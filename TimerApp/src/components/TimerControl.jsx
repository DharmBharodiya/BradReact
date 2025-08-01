import { useEffect, useRef } from "react"

function TimerControl({toggleTimer, isRunning, resetTimer, time}) {

  const startButtonRef = useRef()

  useEffect(() => {
    if(startButtonRef.current){
      startButtonRef.current.focus();
    }
  }, [])


  return (
    <div>

        <button
        className="text-white font-semibold px-4 py-1 bg-green-400 rounded-md mt-4 hover:bg-green-500 transition-all duration-100 cursor-pointer mr-4"
        onClick={toggleTimer}
        ref={startButtonRef}
        >
          {isRunning ? "Pause" : (time > 0) ? "Continue" : "Start"}
        </button>

         <button
        className="text-white font-semibold px-4 py-1 bg-red-400 rounded-md mt-4 hover:bg-red-500 transition-all duration-100 cursor-pointer"
        onClick={resetTimer}
        >
          Reset
        </button>

    </div>
  )
}

export default TimerControl