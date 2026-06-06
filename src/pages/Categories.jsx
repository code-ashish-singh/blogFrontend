import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import axios from 'axios'
import CategorieCard from '../components/CategorieCard'
import ShowData from '../components/ShowData'

const Categories = () => {
  const [data,setData] = useState([])
  const [categories,setCategories] = useState([])
  const [clickData,setclickData] = useState(null)
   const clickHandle = async ()=>{

  }
  const allCategories = async ()=>{
     const deta = await axios.get('public/Data/categories.json')

   
         setCategories(deta.data)
        
       
    
  }
   useEffect(()=>{
      allCategories()
  },[])
  const getClickData = async (data)=>{
      let allData = await axios.get(`public/Data/${data}`)
      setData(allData.data)
      console.log('this is click data',allData.data)
        console.log(data)
  }
 
  useEffect(()=>{
   if(clickData){
     getClickData(clickData)
   }
 },[clickData])
  return (
    <>
      <Header/>
        <div className='w-full h-100 flex justify-center items-center py- 10 mt-10 '>
          
           <div className='w-[40%]' >
               <img 
               className='size-100 rounded-md '
               src="https://img.freepik.com/free-vector/digital-guide-abstract-illustration_335657-5067.jpg?semt=ais_hybrid&w=740&q=80" alt="" />
           </div>
           <div className='w-[40%]'>
             <h1 className='text-3xl'>Categories</h1>
             <p className='font-[cursive] text-lg'>Explore blogs by categories and find content that interests you. Discover curated articles, step-by-step guides, and expert tips tailored exactly to your passions—whether you are looking to learn something new, stay updated on industry trends, or simply find inspiration.</p>
          </div>
        </div>
        <div
          className='px-20 flex justify-between mt-10 '
        >
          <h1 className='text-2xl font-medium '>All Categories</h1>
          <h2 
          onClick={()=>{
            setclickData(null)
          }}
          className='cursor-pointer text-blue-700 font-medium'
          >View All</h2>
        </div>
        <div className='px-20 mt-5 flex gap-4 flex-wrap'>
          { clickData ? "" : 
            categories.map((item,key)=>(
         <CategorieCard 
             key={key}
              setclickData={setclickData}
              topic={item.topic}
              description = {item.description}
              article_count={item.article_count}
              filename = {item.filename}
              />))
          }
          
        </div>
        <div className='px-20 mt-10 flex flex-col gap-8'>
          {
            clickData ?  <h1 className='text-3xl uppercase'> Topic {clickData.split('.')[0]}</h1> : ""
          }
          {
            (!(data.length > 0)) ? "" :   data.map((item,key)=>(
               <ShowData 
               key={key}
               title={item.title}
               description={item.description}
               image = {item.image}
               likes = {item.likes}
               comments={item.comments.length}
               authorName={item.authorName}
               />))
          }
         
        </div>
      <Footer/>
    </>
  )
}

export default Categories