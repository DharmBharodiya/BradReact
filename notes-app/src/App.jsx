import React, { useEffect, useState } from 'react'
import NoteForm from './components/NoteForm'
import Note from './components/Note';

function App() {

  // notes array that will store all the notes and its respective data
  const [notes, setNotes] = useState(() => {
    const notes = JSON.parse(localStorage.getItem("notes"));
    return notes || [];
  });

  //everytime there is some change in the notes, respective update to its localstorage will be done as soon as the change is triggered.
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes))
  }, [notes])


  const handleDelete = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  }


  return (
    <div
    className='w-sm sm:w-lg mt-10 sm:p-6 p-4 bg-gray-200 rounded-lg shadow-lg mb-10 mx-auto'
    >
      <div
      className='mb-4'
      >
        <h1
      className='text-xl sm:text-2xl font-bold text-center'>📝Jot the Note</h1>
      <p
      className='text-sm italic text-center text-gray-600'
      >dhrm studios</p>
      </div>

      <NoteForm notes={notes} setNotes={setNotes}/>

      <Note notes={notes} handleDelete={handleDelete}/>
    </div>
  )
}

export default App