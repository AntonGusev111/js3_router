import { useState } from 'react'
import './App.css'
import MainPage from './Components/MainPage'
import ProjectRouters from './Routers/ProjectRouters'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
    <ProjectRouters />
   </>
  )
}

export default App
