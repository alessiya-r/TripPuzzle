import { useEffect, useState } from 'react'

function App() {
  const [status, setStatus] = useState('загрузка...')

  useEffect(() => {
    fetch('http://localhost:8000/api/health')
      .then((res) => res.json())
      .then((data) => setStatus(data.status))
      .catch(() => setStatus('ошибка: бэкенд недоступен'))
  }, [])

  return (
    <main>
      <h1>TripPuzzle</h1>
      <p>API: {status}</p>
    </main>
  )
}

export default App