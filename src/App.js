import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login'
import AdminPage from './pages/AdminPage'
import UserPage from './pages/UserPage'
import ErrorsPage from './pages/ErrorsPage'
import HomePage from './pages/HomePage'
import { useState } from 'react';

function App() {
  const [isLogged, setIsLogged] = useState(true)
  const [role, setRole] = useState("") // admin, user , guest

  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          {/* <Route path='/' element={ <HomePage/> } /> */}
          {isLogged && <>
            <Route path='/admin' element={<AdminPage />} />
            <Route path='/user' element={<UserPage />} />
            <Route path='/errors' element={<ErrorsPage />} />
            <Route path='*' element={<HomePage />} />
          </>}

          <Route path='*' element={<Login />} />
          {/* משימה ב : ליצור זמנית סטייט שבודק האם היוזר מאושר */}
        </Routes>

      </header>
    </div>
  );
}

export default App;
