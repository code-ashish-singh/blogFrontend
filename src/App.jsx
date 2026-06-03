import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Authors from './pages/Authors'
import Categories from './pages/Categories'
import CreateBlog from './pages/CreateBlog'
import Explore from './pages/Explore'
import Login from './pages/Login'
import Signup from './pages/Signup'
import UserProfile from './pages/UserProfile'
import ProtectedRoutes from './protected/ProtectedRoutes'

const App = () => {
  return (
    <>
        <BrowserRouter>
              <Routes>
                  <Route path='/'  element={<Home/>} />
                  <Route path='/author'  element={<Authors/>} />
                  <Route path='/categories'  element={<Categories/>} />
                  <Route path='/create-blog'  element={<ProtectedRoutes><CreateBlog/></ProtectedRoutes>} />
                  <Route path='/explore'  element={<Explore/>} />
                  <Route path='/login'  element={<Login/>} />
                  <Route path='/signup'  element={<Signup/>} />
                  <Route path='/user-profile'  element={<UserProfile/>} />

              </Routes>
        </BrowserRouter>
    </>
  )
}

export default App