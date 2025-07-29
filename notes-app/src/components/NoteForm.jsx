import React, { useState } from 'react'

function NoteForm() {

  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("medium");
  const [category, setCategory] = useState("work");
  const [description, setDescription] = useState("");

  return (
    <form
    className='flex justify-center flex-col'
    >
        <div
        className='flex flex-col mb-4'
        >
            <label htmlFor='title' className='font-medium'>Title</label>
            <input
            type="text"
            id='title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className='w-full px-2 py-1 border-1 rounded-lg'
            />
        </div>
         <div
        className='flex flex-col mb-4'
        >
            <label htmlFor='priority' className='font-medium'>Priority</label>
            <select
            type="text"
            id='priority'
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className='w-full px-2 py-1 border-1 rounded-lg'
            >
                <option value="high">🔴High</option>
                <option value="medium">🟡Medium</option>
                <option value="low">🟢Low</option>
            </select>
        </div>

        <div
        className='flex flex-col mb-4'
        >
            <label htmlFor='category' className='font-medium'>Category</label>
            <select
            type="text"
            id='category'
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className='w-full px-2 py-1 border-1 rounded-lg'
            >
                <option value="work">💻 Work</option>
                <option value="education">🎒 Education</option>
                <option value="shopping">🛒 Shopping</option>
                <option value="fun">🧸 Fun</option>
            </select>
        </div>

        <div
        className='flex flex-col mb-4'
        >
            <label htmlFor='description' className='font-medium'>Description</label>
            <textarea
            type="text"
            id='description'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className='w-full px-2 py-1 border-1 rounded-lg'
            placeholder='Write your note here.....'
            ></textarea>
        </div>
        <div>
            <button
            className='w-full bg-purple-700 text-white font-semibold px-4 py-2 rounded-lg hover:bg-purple-900 transition-all duration-150 cursor-pointer'
            >Add Note</button>
        </div>
    </form>
  )
}

export default NoteForm