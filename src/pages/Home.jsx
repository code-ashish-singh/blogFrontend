import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useNavigate , Link } from 'react-router-dom'
import BlogCards from '../components/BlogCards'

const Home = () => {
    const navigate = useNavigate()
    const [blogData,setBlogData] = useState([])
    const getData = async ()=>{
      let data = await axios.get('public/Data/Blog.json')
      setBlogData(data.data)
     
    }
    useEffect(()=>{
        getData()
    },[])
  return (
    <>
       <Header/>
       <div className='px-20 h-[85vh] w-full flex justify-center items-center '>
            <div className='w-1/2 flex flex-col gap-3 justify-start  '>
                <p className='bg-blue-300 text-blue-900 font-medium py-1 px-1 rounded-2xl w-1/2 '>+ Welcome to ThoughtShare</p>
                <p className='text-5xl font-medium'>Share Your Thought,</p>
                <p className='text-5xl font-medium' ><span className='text-blue-700'>Inspire</span> the World</p>
               <div className='text-lg text-gray-800 '>
                 <p className='text-nowrap '>Discover ideas,stories and prespectives  from amazing writers around the world.</p>
                <p>Read freely and Publish your own thought with the World.</p>
               </div>
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
            <div className='w-1/2 justify-center items-center flex'>
                  <img className='size-100 rounded-4xl' src="public/Home.jpg" alt="" />
            </div>
       </div>
       <div>
          <div className='w-full px-20 flex justify-between font-medium'>
            <h1
            className='font-medium text-2xl'
            >Featured Blogs
            </h1>
            <Link 
            to='/categories'
            className='text-blue-700 '>
              View all
              </Link>
          </div>
          <div className='px-20 mt-5 flex gap-5 flex-wrap' >
              {
                blogData.map((item,key)=>(
                  <BlogCards
                   authorname={item.authorName} 
                   imgUrl={item.image}
                    like={item.likes} 
                    title={item.title} 
                    comment={item.comments.length}
                     />
                ))
              }
          </div>
          <div className='px-20 h-70 w-full'>
                  <div 
                  className='h-full w-full bg-linear-to-r from-cyan-200 flex 
                   to-blue-300 mt-10 rounded-2xl'
                  >
                     <div className='h-full w-1/2 flex flex-col justify-center items-start pl-20 gap-1 '>
                          <p className='font-medium text-2xl'>
                            Ready to share your ideas with the World ?
                             </p>
                             <p className='text-gray-800 font-medium text-lg'>
                              Join thousands of writers and readers on ThoughtShare.
                             </p>
                             <p className='text-gray-800 font-medium text-lg'>
                              Start writing , sharing and inspiring Today.
                             </p>
                              <div className='flex gap-5'>
                 <button 
                 className='border-none bg-blue-700 text-white px-3 py-1 font-semibold text-lg rounded cursor-pointer'
                 onClick={()=>{navigate('/create-blog')}}
                 >
                    Write a Blog
                </button>
                <button 
                className='border-2  border-gray-900 text-gray-800 px-3 py-1 font-semibold text-lg rounded cursor-pointer '
                onClick={()=>{navigate('/explore')}}
                >
                   Explore Blog
                </button>
                </div>





                     </div>
                     <div className='h-full w-1/2 flex justify-center items-center'>
                          <img 
                          className='size-60 rounded-2xl'
                          src="public/Home.jpg" alt="" />
                     </div>
                  </div>
          </div>
       </div>
       <Footer/>
    </>
  )
}

export default Home