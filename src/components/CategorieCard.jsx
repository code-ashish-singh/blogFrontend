import React from 'react'

const CategorieCard = ({topic,description, article_count , filename ,setclickData}) => {
  return (
    <>
       <div className='h-55 w-70  border-1 border-gray-600 rounded-md px-5 py-3 relative '>
                <h1
                 className='text-2xl font-medium'
                >{topic}</h1>
                <h2 
                className=' text-base font-medium text-gray-600 '
                >234 Article</h2>
                <p className='text-gray-900'>
                   {description}
                </p>
                <button 
                onClick={()=>{
                    setclickData(filename)
                }}
                className='bg-blue-600 text-white px-3 py-1 rounded-md cursor-pointer  absolute right-3 bottom-2 '>
                    View More</button>
       </div>
    </>
  )
}

export default CategorieCard