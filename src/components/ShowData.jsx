import React from 'react'

const ShowData = ({key,title,description,image,likes,comments,authorName}) => {
  return (
    <>
      <div className='flex border-1 rounded-md px-2 py-5 gap-5 relative'>
           <div>
                 <img 
                 className='h-30 w-50 object-fill'
                  src={image} 
                  alt="" />
           </div>
           <div>
                <h1 className='font-bold text-xl'>{title.split('-')[0]}</h1>
                <h1>{description}</h1>
                <div className='flex gap-5'>
                     <h1> ❤️ {likes}</h1>
                     <h1>🗨️ {comments}</h1>

                </div>
                <div className='w-full  '>
                      
                      <h1 className='absolute bottom-5 right-5 font-bold text-lg '>{authorName}</h1>
                </div>
           </div>
        </div>  
    </>
  )
}

export default ShowData