import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  
  function handleSubmit(){
  alert("salom")
  }
  return (
    <div className='wrappper'>
     <input type='text' placeholder='Enter todos ?' /><button onChange={handleSubmit} >save</button>
    </div>
  )
}

export default App
