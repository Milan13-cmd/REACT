import React, { useState } from 'react'

function Product({age,data}) {
    const[a,b] = useState(false);
  return (
    <div className='text-white w-full h-60 bg-zinc-700'>
       <h1 className= {`${a === false ? "text-red-400 ": "text-blue-600"}`}>{a === false ? 'hello' : "hey"}</h1>
       <button onClick={()=>{b(!a)}}>Click me</button>
    </div>
  )
}

export default Product