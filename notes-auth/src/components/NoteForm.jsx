import React, { useState } from 'react'
import TextInput from './inputs/TextInput';
import SelectOption from './inputs/SelectOption';

function NoteForm({notes, setNotes}) {

//   const [title, setTitle] = useState("");
//   const [priority, setPriority] = useState("medium");
//   const [category, setCategory] = useState("work");
//   const [description, setDescription] = useState("");

//a single place to store all the related data of the form
  const [formData, setFormData] = useState({
    title: "",
    priority: 'medium',
    category: "work",
    description: '',
  })

    const [isFormVisible, setIsFormVisible] = useState(false);
    const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value,
    })
  }

    const handleSubmit = (e) => {
    e.preventDefault();
        setError("");
        //validate the form 
        if(!formData.title.trim() || !formData.description.trim()) {
            setError("Title and Description are required.");
            return;
        }

    const newNote = {id: Date.now(), ...formData};

    // add the formdata to the notes state
    setNotes(prev => [newNote, ...prev]);

    // make all the fields back to default
    setFormData({ title:'', priority: 'medium', category: 'work', description: '' })
    setIsFormVisible(false);
}

  return (
    <>

    <div>
        <button
        onClick={() => setIsFormVisible(!isFormVisible)}
        className='px-2 sm:px-4 py-1 bg-purple-300 sm:py-2 border-2 border-gray-200 rounded-lg hover:border-purple-400 hover:bg-purple-400 transition-all shadow-lg duration-200 cursor-pointer w-full mb-4 mt-2 hover:text-white'
        >
            {isFormVisible ? "Hide Form ❌" : "Add new note ➕"}
        </button>
    </div>
    {
        isFormVisible && (<form
    className='flex justify-center flex-col transition-all duration-300'
    onSubmit={handleSubmit}
    >
        {/* <div
        className='flex flex-col mb-4'
        >
            <label htmlFor='title' className='font-medium'>Title</label>
            <input
            type="text"
            name='title'
            value={formData.title}
            onChange={handleChange}
            className='w-full px-2 py-1 border-1 rounded-lg'
            />
        </div> */}
        <TextInput
        name="title"
        label="Title"
        value={formData.title}
        handleChange={handleChange}
        required
        />
         {/* <div
        className='flex flex-col mb-4'
        >
            <label htmlFor='priority' className='font-medium'>Priority</label>
            <select
            type="text"
            name='priority'
            value={formData.priority}
            onChange={handleChange}
            className='w-full px-2 py-1 border-1 rounded-lg'
            >
                <option value="high">🔴High</option>
                <option value="medium">🟡Medium</option>
                <option value="low">🟢Low</option>
            </select>
        </div> */}

        <SelectOption
        name="priority"
        label="Priority"
        value={formData.priority}
        handleChange={handleChange}
        options={
            [
                {value: "high",
                label: "🔴High"},
                {value: "medium",
                label: "🟡Medium"},
                {value: "low",
                label: "🟢Low"},
            ]
        }
        />

        {/* <div
        className='flex flex-col mb-4'
        >
            <label htmlFor='category' className='font-medium'>Category</label>
            <select
            type="text"
            name='category'
            value={formData.category}
            onChange={handleChange}
            className='w-full px-2 py-1 border-1 rounded-lg'
            >
                <option value="work">💻 Work</option>
                <option value="education">🎒 Education</option>
                <option value="shopping">🛒 Shopping</option>
                <option value="fun">🧸 Fun</option>
            </select>
        </div> */}

         <SelectOption
        name="category"
        label="Category"
        value={formData.category}
        handleChange={handleChange}
        options={
            [
                {value: "work",
                label: "💻 Work"},
                {value: "education",
                label: "🎒 Education"},
                {value: "shopping",
                label: "🛒 Shopping"},
                {value: "fun",
                label: "🧸 Fun"},
            ]
        }
        />

                <div className='flex flex-col mb-4'>
                    <label htmlFor='description' className='font-medium'>Description</label>
                    <textarea
                        name='description'
                        value={formData.description}
                        onChange={handleChange}
                        className='w-full px-2 py-1 border-1 rounded-lg'
                        placeholder='Write your note here.....'
                        required
                    />
                </div>
                {error && <p className='text-red-600 text-sm mb-2'>{error}</p>}
        <div>
            <button
            className='w-full bg-purple-700 text-white font-semibold px-4 py-2 rounded-lg hover:bg-purple-900 transition-all duration-150 cursor-pointer'
            type='submit'
            >Add Note</button>
        </div>
    </form>)
    }
    </>
  )
}

export default NoteForm