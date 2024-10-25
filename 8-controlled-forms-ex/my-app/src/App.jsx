import { useState } from 'react';
import './App.css';
import InteractiveWelcome from './components/InteractiveWelcome';
import Login from './components/Login';

function App() {
  const [name, setName] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  return (
    <>
    <InteractiveWelcome name={name} onChange={handleNameChange} />
    <Login />
    </>
  );
}

export default App;