import { useState } from 'react'

function App() {
   const [color, setColor] = useState('brown')

  return (
    <>
      <div className='w-full h-screen duration-200'
        style={{backgroundColor: color}}>
          <div className='fixed flex flex-wrap justify-center
          bottom-12 inset-x-0 px-2'>
            <div className='flex flex-wrap justify-center gap-3
            shadow-lg bg-white rounded-xl px-3 py-1'>
              <button onClick={() => setColor("FireBrick")} className='bg-red-100 px-3 py-2 rounded-2xl   text-white shadow-lg'
              style={{backgroundColor:"red"}}>Red</button>
                <button 
                 onClick={() => setColor("SeaGreen")} 
                className='bg-red-100 px-3 py-2 rounded-2xl  text-white'
              style={{backgroundColor:"green"}}>	SeaGreen</button>
                <button
                 onClick={() => setColor("black")}  
                className='bg-red-100 px-3 py-2 rounded-2xl  text-white'
              style={{backgroundColor:"black"}}>Black</button>
                <button
                 onClick={() => setColor("gray")} 
                 className='bg-red-100 px-3 py-2 rounded-2xl   text-white'
              style={{backgroundColor:"gray"}}>Gray</button>
            </div>
          </div>
      </div>
    </>
  )
}

export default App
