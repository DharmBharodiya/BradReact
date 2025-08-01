import React from 'react'

function TimerDisplay({time}) {
  return (
    <div>
        <h1
        className=" font-semibold text-3xl"
        >⌛Timer: {time}</h1>
    </div>
  )
}

export default TimerDisplay