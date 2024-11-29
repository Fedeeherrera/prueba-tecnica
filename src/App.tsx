import { useState, useEffect } from 'react'
import {type User} from './types'
import './App.css'
import UsersList from './components/UsersList'

function App() {
  const [users, setUsers] = useState<User[]>([])
  const URL_API = `https://randomuser.me/api?results=100`
  useEffect(() => {
    fetch(URL_API)
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.results)
        console.log(data.results)
      })
      .catch((err) => {
        console.error(err)
      })
  }, [])
  return (
    <div className="app">
      <h1>Prueba tecnica</h1>
      <UsersList users={users}/>
    </div>
  )
}

export default App
