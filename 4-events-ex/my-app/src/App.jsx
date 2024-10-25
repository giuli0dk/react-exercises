import './App.css'
import AlertClock from './components/AlertClock'

function App() {

  const handleClick = () => {
    alert("The current time is: " + new Date().toLocaleTimeString())
}

  return (
    <div>
      <AlertClock onAlert={handleClick}/>
    </div>
  )
}

export default App
