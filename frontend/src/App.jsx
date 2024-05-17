import { useState } from 'react'
import './App.css'
import Input from './components/input'
function App() {
  const [email, setEmail] = useState('')
  const [users, setUser] = useState([])
  const handleDelete = async (Email) => {
    const response = await fetch('http://localhost:5000/user', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({Email})
    })
    const data = await response.json()
    console.log(data.message)

  }
  const getUser = async () => {
    const response = await fetch('http://localhost:5000/user')
    const data = await response.json()
    console.log(data)
    setUser(data)
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await fetch('http://localhost:5000/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email, password})
    })
    const data = await response.json()
    console.log(data)
  }
  return (
    <>
      <>
        <form className='flex flex-col' onSubmit={handleSubmit}>
          <Input classname="my-2 p-4 rounded-lg" placeholder="Email" setInput={setEmail} type={email}/>
          <button type="submit" className='bg-green-700 mt-3'>Submit</button>
        </form>  
        <button className='bg-green-700 mt-3' onClick={getUser}>Get Users</button>
        {users.map((user) => {
          return (
            <div key={user.id} className='my-2 p-4'>
              <h1>{user.email}</h1>
              <button className='bg-red-700' onClick={()=>handleDelete(user.email)}>Delete</button>
            </div>
          )
        })}
      </>
    </>
  )
}

export default App
