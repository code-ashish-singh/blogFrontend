import React from 'react'

const Footer = () => {
  return (
    <>
        <div className = "w-full h-70 bg-[#88c1ec] mt-10 flex justify-between py-15 px-20 ">
            <div>
              <h2 className='text-3xl font-[cursive] font-semibold'>ThoughtShare</h2>
              <p className='text-base text-gray-800 px-3 mt-3'
              >A platform to share your thought , 
              <br /> 
              discover ideas, and inspire  the world 
              <br />
               through meaningful stories</p>
            </div>
            <div>
               <h1 className='font-medium text-2xl'>Explore</h1>
               <ul className='text-base text-gray-800 px-3 mt-3' >
                 <li className='cursor-pointer'>All Blogs</li>
                 <li className='cursor-pointer'>Categories</li>
                 <li className='cursor-pointer'>Top Authors</li>
                 <li className='cursor-pointer'>Trending Topic</li>
                 <li className='cursor-pointer'>Latest  Articles</li>
               </ul>
            </div>
            <div>
               <h1 className='font-medium text-2xl'>Community</h1>
               <ul className='text-base text-gray-800 px-3 mt-3'>
                 <li className='cursor-pointer'>About Us</li>
                 <li className='cursor-pointer'>For Writers</li>
                 <li className='cursor-pointer'>Guidelines</li>
                 <li className='cursor-pointer'>Help Center</li>
                 <li className='cursor-pointer'>Contact Us</li>
               </ul>
            </div>
            <div>
              <h1 className='font-medium text-2xl'>Resources</h1>
               <ul className='text-base text-gray-800 px-3 mt-3'>
                 <li className='cursor-pointer'>Write a Blog</li>
                 <li className='cursor-pointer'>API</li>
                 <li className='cursor-pointer'>Sitemap</li>
                 <li className='cursor-pointer'>Privacy Policy</li>
                 <li className='cursor-pointer'>Teams & Conditions</li>
               </ul>
            </div>
            <div>
              <h1 className='font-medium text-2xl' >Newsletter</h1>
              <p className='text-base text-gray-800 px-3 mt-3' >Stay updated with the Latest stories and Writing Tips</p>
              <div className='text-base text-gray-800 px-3 mt-3'>
                 <input 
                 className='border-2 rounded-md h-10 px-5'
                 type="text" 
                 placeholder='Enter Your Email'
                 />
                 <button
                 className='bg-blue-700 text-white text-xl px-3 py-1 rounded-md ml-2'
                 >Subscribe</button>
              </div>
            </div>
        </div>
    </>
  )
}

export default Footer