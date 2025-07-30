


import { useState, useEffect } from 'react'
import Swal from 'sweetalert2'
import './App.css'
import Quiz from './Components/Quiz'

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true' || false
  })
  const [kurdishMode, setKurdishMode] = useState(() => {
    return localStorage.getItem('kurdishMode') === 'true' || false
  })
  const [gameStarted, setGameStarted] = useState(false)

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode)
    localStorage.setItem('kurdishMode', kurdishMode)
    if (darkMode) {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  }, [darkMode, kurdishMode])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  const toggleLanguage = async () => {
    if (gameStarted) {
      const result = await Swal.fire({
        title: kurdishMode ? 'ئایا دڵنیایت؟' : 'Are you sure?',
        text: kurdishMode 
          ? 'ئەگەر زمان بگۆڕیت، یاریەکە دووبارە دەبێتەوە' 
          : 'Changing language will reset the current game',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: kurdishMode ? 'بەڵێ' : 'Yes',
        cancelButtonText: kurdishMode ? 'نەخێر' : 'No',
        background: darkMode ? '#1e293b' : '#ffffff',
        color: darkMode ? '#f8fafc' : '#1e293b',
        reverseButtons: true
      })

      if (result.isConfirmed) {
        setKurdishMode(!kurdishMode)
        setGameStarted(false)
      }
    } else {
      setKurdishMode(!kurdishMode)
    }
  }

  const handleGameStart = () => {
    setGameStarted(true)
  }

  return (
    <div className={`app ${darkMode ? 'dark' : ''}`}>
      <header className="header">
        <div className="header-content">
          <h1>{kurdishMode ? 'کویز' : 'Quiz App'}</h1>
          <div className="controls">
            <button onClick={toggleLanguage} className="language-btn">
              {kurdishMode ? 'English' : 'کوردی'}
            </button>
            <button onClick={toggleDarkMode} className="theme-btn">
              {darkMode ? '☀️' : '🌙'}
            </button>
          </div>
        </div>
      </header>
      <Quiz 
        darkMode={darkMode} 
        kurdishMode={kurdishMode} 
        onGameStart={handleGameStart}
      />
    </div>
  )
}

export default App