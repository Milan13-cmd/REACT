import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from "./components/Card"

function App() {
  const [count, setCount] = useState(0)
 let Obj = {
  name: "John Doe",
 }
  return (
    <>
    <h1 className='bg-green-500 text-black p-4
    rounded-xl mb-4'>Tailwind</h1>
   <Card username="Milan" btnText = "click Me"/>
   <Card username="Riya" />

    </>
  )
}

export default App
