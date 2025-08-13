import React, { useState } from 'react';

// Lightweight demo auth gate (NOT secure). Uses localStorage.
function AuthGate({ onAuth }) {
  const [mode, setMode] = useState('login'); // 'login' | 'signup'
  const [form, setForm] = useState({ username: '', password: '' });
  const [error, setError] = useState('');

  const users = React.useMemo(() => {
    try { return JSON.parse(localStorage.getItem('na_users')) || []; } catch { return []; }
  }, []);

  const saveUsers = (list) => localStorage.setItem('na_users', JSON.stringify(list));

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    const { username, password } = form;
    if (!username.trim() || !password) { setError('All fields required'); return; }
    if (mode === 'signup') {
      if (users.find(u => u.username === username)) { setError('User already exists'); return; }
      const newUsers = [...users, { username, password }];
      saveUsers(newUsers);
      localStorage.setItem('na_active_user', JSON.stringify({ username }));
      onAuth({ username });
    } else {
      const user = users.find(u => u.username === username && u.password === password);
      if (!user) { setError('Invalid credentials'); return; }
      localStorage.setItem('na_active_user', JSON.stringify({ username }));
      onAuth({ username });
    }
  };

  return (
    <div className='bg-white max-w-md mx-auto mt-10 p-6 rounded-xl shadow-xl'>
      <h1 className='text-2xl font-bold text-center text-purple-700 mb-2'>📝 Jot the Note</h1>
      <p className='text-center text-gray-500 mb-6 italic'>dhrm studios</p>
      <div className='flex justify-center mb-6'>
        <button
          onClick={() => { setMode('login'); setError(''); }}
          className={`px-4 py-2 text-sm font-semibold rounded-l-lg border border-purple-400 ${mode==='login' ? 'bg-purple-600 text-white' : 'bg-purple-100 text-purple-700 hover:bg-purple-200'}`}
        >Login</button>
        <button
          onClick={() => { setMode('signup'); setError(''); }}
          className={`px-4 py-2 text-sm font-semibold rounded-r-lg border border-purple-400 border-l-0 ${mode==='signup' ? 'bg-purple-600 text-white' : 'bg-purple-100 text-purple-700 hover:bg-purple-200'}`}
        >Sign Up</button>
      </div>
      <form onSubmit={handleSubmit} className='space-y-4'>
        <div className='flex flex-col'>
          <label className='font-medium'>Username</label>
          <input
            name='username'
            value={form.username}
            onChange={handleChange}
            className='px-3 py-2 rounded-md border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500'
            placeholder='Enter username'
            autoComplete='username'
          />
        </div>
        <div className='flex flex-col'>
          <label className='font-medium'>Password</label>
          <input
            name='password'
            type='password'
            value={form.password}
            onChange={handleChange}
            className='px-3 py-2 rounded-md border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500'
            placeholder='Enter password'
            autoComplete={mode==='login' ? 'current-password' : 'new-password'}
          />
        </div>
        {error && <p className='text-red-500 text-sm'>{error}</p>}
        <button
          type='submit'
          className='w-full bg-purple-700 hover:bg-purple-800 text-white font-semibold py-2 rounded-md shadow transition-colors'
        >{mode === 'login' ? 'Login' : 'Create Account'}</button>
      </form>
      <p className='text-xs text-center text-gray-500 mt-6'>Demo only • Not secure</p>
    </div>
  );
}

export default AuthGate;
