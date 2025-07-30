import React from 'react'

function Note({notes, handleDelete}) {

  if(notes.length === 0){
    return (
        <div className='text-md text-gray-500 text-center mt-3'>
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

                <button
                className='bg-red-500/10 py-1 px-2 shadow-xl drop-shadow-lg border-2 border-white rounded-lg hover:border-red-300 hover:bg-red-500/50 transition-all duration-150 cursor-pointer mt-2 mb-1 text-red-600 hover:text-white'
                onClick={() => handleDelete(note.id)}
                >🗑️ Delete</button>
            </div>
        ))}
    </div>
  )
}

export default Note