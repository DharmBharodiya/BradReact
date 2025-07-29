import React from 'react'

function Note({notes}) {

  if(notes.length === 0){
    return (
        <div className='text-md text-gray-500 text-center mt-4'>
            No notes yet.
        </div>
    )
  }

  return (
    <div>
        {notes.map((note) => (
            <div
            key={note.id}
            className='bg-white shadow-lg px-4 py-2 rounded-lg mt-4 mb-4'
            >
                <h1
                className='text-xl font-bold text-gray-800'
                >{note.priority === "high" ? "🔴" : note.priority === "medium" ? "🟡" : "🟢"}{note.title}</h1>
                <p className='text-sm  text-gray-600'>
                    <span className='font-bold'>Priority:</span> {note.priority}
                </p>
                <p
                 className='text-sm  text-gray-600'
                >
                    <span className='font-bold'>Category:</span> {note.category}
                </p>
                <h1 className='text-lg text-gray-600 italic'>{note.description}</h1>
            </div>
        ))}
    </div>
  )
}

export default Note