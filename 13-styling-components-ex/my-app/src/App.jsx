import { useState } from 'react'
import Welcome from './components/Welcome'
import CounterDisplay from './components/CounterDisplay'
import Login from './components/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Welcome name="" />
      <CounterDisplay count={count} setCount={setCount} />
      <Login />
    </>
  )
}

export default App
