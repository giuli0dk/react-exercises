import React from 'react'
import FocusableInput from './components/FocusableInput'
import StrictModeComponent from './components/StrictModeComponent'
import './App.css'

const App = () => {
  return (
      <React.StrictMode>
          <FocusableInput />
          <StrictModeComponent />
      </React.StrictMode>
  );
};


export default App
