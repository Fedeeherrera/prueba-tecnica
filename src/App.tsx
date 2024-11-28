import { useEffect } from 'react'
import './App.css'

function App() {
  const URL_API = `https://randomuser.me/api?results=100`
  useEffect(() => {
    fetch(URL_API)
    .then(response => response.json())
    .then(data => console.log(data))
  })
  return (
    <div className='app'>
      <h1>Prueba tecnica</h1>
    </div>
  )
}

export default App
