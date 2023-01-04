import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Login from './pages/Login'
import AdminPage from './pages/AdminPage'
import UserPage from './pages/UserPage'
import ErrorsPage from './pages/ErrorsPage'
import HomePage from './pages/HomePage'
import { useEffect, useState } from 'react';

function App() {
  const [isLogged, setIsLogged] = useState(false)
  const [role, setRole] = useState("") // admin, user , guest
  const nav = useNavigate()

  useEffect(() => {
    !isLogged && nav('/login')
  }, [])
  return (
    <div className="App">
      <header className="App-header">

        <Routes>
          <Route path='/admin' element={<AdminPage />} />
          <Route path='/user' element={<UserPage />} />
          <Route path='/errors' element={<ErrorsPage />} />
          <Route path='*' element={<HomePage />} />

          <Route path='/login' element={<Login />} />
          {/* משימה ב : ליצור זמנית סטייט שבודק האם היוזר מאושר */}
        </Routes>

      </header>
    </div>
  );
}

export default App;
