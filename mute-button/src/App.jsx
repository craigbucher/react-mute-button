import { useState } from 'react'
import './App.css'
import ButtonToggle from '../components/ButtonToggle'

function App() {
  const [toggle, setToggle] = useState(0)

  return (
    <div className="App">
      <ButtonToggle toggle={toggle} setToggle={setToggle} />
    </div>
  )
}

export default App