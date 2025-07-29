import React, { useState } from 'react'
import NoteForm from './components/NoteForm'
import Note from './components/Note';

function App() {

  // notes array that will store all the notes and its respective data
  const [notes, setNotes] = useState([]);

  return (
    <div
    className='max-w-lg mx-auto mt-10 p-6 bg-gray-200 rounded-lg shadow-lg'
    >
      <div
      className='text-2xl font-bold text-center mb-4'
      >📝Jot the Note</div>

      <NoteForm notes={notes} setNotes={setNotes}/>

      <Note notes={notes} />
    </div>
  )
}

export default App