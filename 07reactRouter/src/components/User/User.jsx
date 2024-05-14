import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const  {userId} = useParams()
  return (
    <div className='bg-red-700 text-white p-4 text-2xl'>User : {userId}</div>
  )
}

export default User