import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

const[counter, SetCounter]  =useState(0)
// let counter = 15

const addValue = () => {
  //counter =+ 1;
  if(counter >= 20){
    SetCounter(counter +0)
  }
  else{

    SetCounter(counter + 1)
  }
}
const removevalue = () => {
  if(counter >= 0){
    SetCounter(counter + 0)
  }
  else{

    SetCounter(counter - 1);
  }
}
  return (
    <>
      <h2>Counter value: {counter}</h2>
      <button
       onClick={addValue}
      >Add value</button>

      <br/>

      <button onClick={removevalue}>Remove value</button>
    </>
  )
}

export default App
