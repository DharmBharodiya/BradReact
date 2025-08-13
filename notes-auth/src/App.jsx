import React, { useEffect, useState } from 'react'
import NoteForm from './components/NoteForm'
import Note from './components/Note';
import AuthGate from './components/AuthGate';

function App() {

  // active user
  const [user, setUser] = useState(() => {
    try { return JSON.parse(localStorage.getItem('na_active_user')); } catch { return null; }
  });
  // notes for active user
  const [notes, setNotes] = useState([]);

  // Load notes when user changes (i.e., login/logout)
  useEffect(() => {
    if (user?.username) {
      const stored = JSON.parse(localStorage.getItem(`notes_${user.username}`)) || [];
      setNotes(stored);
    } else {
      setNotes([]);
    }
  }, [user]);

  // Persist notes per user
  useEffect(() => {
    if (user?.username) {
      localStorage.setItem(`notes_${user.username}`, JSON.stringify(notes));
    }
  }, [notes, user]);


  const handleDelete = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  }


  if (!user) {
    return <AuthGate onAuth={setUser} />;
  }

  return (
    <div className='w-sm sm:w-lg mt-10 sm:p-6 p-4 bg-gray-200 rounded-lg shadow-lg mb-10 mx-auto relative'>
      <button
  onClick={() => { localStorage.removeItem('na_active_user'); setUser(null); }}
        className='absolute top-2 right-2 text-xs bg-purple-600 hover:bg-purple-800 text-white px-3 py-1 rounded-md shadow'
      >Logout</button>
      <div className='mb-4'>
        <h1 className='text-xl sm:text-2xl font-bold text-center'>📝Jot the Note</h1>
        <p className='text-sm italic text-center text-gray-600'>Welcome, {user.username}</p>
      </div>
      <NoteForm notes={notes} setNotes={setNotes} />
      <Note notes={notes} handleDelete={handleDelete} />
    </div>
  )
}

export default App