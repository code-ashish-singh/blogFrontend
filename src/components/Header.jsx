import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Header = () => {
    const navigate = useNavigate()
  return (
    <>
       <nav className = "w-full h-20 flex px-20 mt-5 items-center justify-between">
                <h2 className='text-3xl font-[cursive] font-semibold'>ThoughtShare</h2>
                <ul className='flex gap-5 font-medium text-lg '>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/explore'>Explore</Link></li>
                    <li><Link to='/categories'>Categories</Link></li>
                    <li><Link to='/author'>Author</Link></li>
                    <li><Link to='/about'>About</Link></li>
                </ul>
                <div>
                    <input
                     type="text" 
                     placeholder='Search Blog,Topic,Author'
                    className='border-2 px-3 py-1 border-gray-700 rounded text-gray-900 '
                    / >
                </div>
               <div className='flex gap-5'>
                 <button 
                 className='border-none bg-blue-700 text-white px-3 py-1 font-semibold text-lg rounded cursor-pointer'
                 onClick={()=>{navigate('/create-blog')}}
                 >
                    Write a Blog
                </button>
                <button 
                className='border-2  border-gray-900 text-gray-800 px-3 py-1 font-semibold text-lg rounded cursor-pointer '
                onClick={()=>{navigate('/signup')}}
                >
                    SignIn
                </button>
               </div>
       </nav>
    </>
  )
}

export default Header