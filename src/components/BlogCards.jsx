import React from 'react'
import { Link } from 'react-router-dom'
const BlogCards = ({authorname,imgUrl,like,title,comment}) => {
  return (
    <>
       <div className='h-110 w-70 rounded-2xl border-2  overflow-hidden'>
                <div className='h-[45%] w-full bg-black'>
                    <img 
                    className='h-full w-full'
                    src={imgUrl}
                     alt="" />
                </div>
                <div className='h-[55%] w-full px-2 py-2 '>
                        <h1 className='font-medium text-lg'>{title}</h1>
                        <h2 className='text-sm'>In this insight-driven article, engineering student Avani Sethi explores the critical concepts of exploring the depths of deep learning. 
                            <Link 
                                        to='/explore'
                                        className='text-blue-700 '>
                                          View all
                                          </Link>
                        </h2>
                        <div className='flex'>
                            <div>
                               <h2 className='font-medium text-lg'>{authorname}</h2>
                               <div className='flex justify-between gap-2'>
                                   <h2> 23-05-2026</h2>
                                    <h2>❤️ {like}</h2>
                                    <h2>🗨️ {comment}</h2>
                                </div>
                            </div>

                        </div>
                </div>
       </div>
    </>
  )
}

export default BlogCards