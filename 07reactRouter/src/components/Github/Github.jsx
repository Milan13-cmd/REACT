import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //  fetch('https://api.github.com/users/Milan13-cmd')
    //  .then(response => response.json())
    //  .then(data => {
    //     console.log("Got data: ",data)
    //     setData(data)
    //  })
    // }, [])
  return (
    <div className='text-center m-4 bg-gray-600
    text-white text-3xl '>
        <p>Github followrs: {data.followers}</p>
    <img src={data.avatar_url} width={300}
    className='rounded-full p-4'/>
    </div>

  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/Milan13-cmd')
    return response;
}