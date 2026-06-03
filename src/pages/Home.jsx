import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
  return (
    <>
       <Header/>
       <div className='px-20 h-[85vh] w-full flex justify-center items-center '>
            <div>
                <p className='bg-blue-300 text-blue-900 font-medium py-1 px-1 rounded-2xl '>+ Welcome to ThoughtShare</p>
                <p>Share Your Thought,</p>
                <p><span>Inspire</span> the World</p>
                <p>Discover ideas,stories and prespectives <br/> from amazing writers around the world.</p>
                 <div className='flex gap-5'>
                 <button 
                 className='border-none bg-blue-700 text-white px-3 py-1 font-semibold text-lg rounded cursor-pointer'
                 onClick={()=>{navigate('/explore')}}
                 >
                    Start Reading
                </button>
                <button 
                className='border-2  border-gray-900 text-gray-800 px-3 py-1 font-semibold text-lg rounded cursor-pointer '
                onClick={()=>{navigate('/create-blog')}}
                >
                    Write a Blog
                </button>
               </div>
            </div>
            <div>

            </div>
       </div>
       <Footer/>
    </>
  )
}

export default Home