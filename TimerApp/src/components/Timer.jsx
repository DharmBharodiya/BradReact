import TimerDisplay from "./TimerDisplay"
import TimerControl from "./TimerControl"

function Timer(
  {
    time,
    toggleTimer,
    resetTimer,
    isRunning
  }
) {
  return (
     <div
    className='bg-gray-300 max-w-full min-h-screen p-6 flex justify-center items-start'
    >
      <div
      className='bg-white w-lg px-4 py-4 rounded-lg text-center'
      >
        <TimerDisplay
        time={time}
        />
        <TimerControl
        toggleTimer={toggleTimer}
        resetTimer={resetTimer}
        isRunning={isRunning}
        time={time}
        />
      </div>
    </div>
  )
}

export default Timer