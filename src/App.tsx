import { useState, useEffect, useRef } from 'react'
import UsersList from './components/UsersList'
import './App.css'
import { User } from './types'

function App() {
  const [users, setUsers] = useState<User[]>([])
  const [showColors, setShowColors] = useState(false)
  const [sortyByCountry, setSortByCountry] = useState(false)
  const originalUsers = useRef<User[]>([])

  const toggleColors = () => {
    setShowColors(!showColors)
  }

  const toggleSortByCountry = () => {
    setSortByCountry((prevState) => !prevState)
  }

  const handleReset = () => {
    setUsers(originalUsers.current)
  }

  const handleDelete = (email: string) => {
    const filteredUsers = users.filter((user) => user.email != email)
    setUsers(filteredUsers)
  }

  const URL_API = `https://randomuser.me/api?results=100`
  useEffect(() => {
    fetch(URL_API)
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.results)
    originalUsers.current = data.results

      })
      .catch((err) => {
        console.error(err)
      })
  }, [])

  const sortedUsers = sortyByCountry
    ? [...users].sort((a, b) => {
        return a.location.country.localeCompare(b.location.country)
      })
    : users

  return (
    <div className="app">
      <h1>Prueba tecnica</h1>
      <header>
        <button onClick={toggleColors}>Colorear Filas</button>
        <button onClick={toggleSortByCountry}>
          {sortyByCountry ? 'No ordenar por pais' : 'Ordernar por pais'}
        </button>
        <button onClick={handleReset}>Resetear Usuarios</button>
      </header>
      <UsersList users={sortedUsers} showColors={showColors} deleteUser={handleDelete} />
    </div>
  )
}

export default App
