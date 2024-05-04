import React, { useState } from 'react'
import Product from './Product';

function App() {
  var [a,b] = useState(69);
  return (
    <div className='w-full h-screen bg-slate-500 text-white p-5'>
      <Product age = '25' data={{age: 24, name: "MIlan"}}/>
    </div>
  )
}

export default App