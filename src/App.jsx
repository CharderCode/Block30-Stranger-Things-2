import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Posts from './pages/Posts'
import Register from './pages/Register'
import Login from './pages/Login'
import Navbar from './components/Navbar'
import Profile from './pages/Profile'
import CreatePost from './pages/CreatePost'


function App() {
  const [token, setToken] = useState(localStorage.getItem('token')); // Save Token for user login recognition 

  return (
    <div>
      <Navbar setToken={setToken} token={token}/>
      <Routes>
        <Route path="/" element={<Posts token={token}/>} />
        <Route path="/profile" element={<Profile token={token}/>} />
        <Route path="/createPost" element={<CreatePost token={token}/>} />
        <Route path="/login" element={<Login token={token} setToken={setToken}/>} />
        <Route path="/register" element={<Register token={token} setToken={setToken}/>} />
      </Routes>
    </div>
  )
}


export default App
