import React, {useState, useContext} from 'react'
import UserContext from '../context/UseContext'
function Login() {
    const[username, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})

    }
  return (
    <>
    <h2>LOgin</h2>
    <input type="text"
      value={username}
      onChange={(e) => setUserName(e.target.value)}
     placeholder='username' />
    <input type="password"
     value={password}
     onChange={(e) => setPassword(e.target.value)}
    placeholder='password' />
    <button onClick={handleSubmit}>Submit</button>
    </>
  )
}

export default Login