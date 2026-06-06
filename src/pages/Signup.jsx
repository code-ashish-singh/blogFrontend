import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
  const navigate = useNavigate()
  const [formdata,setFormdata] = useState({
    name : "",
    email: "",
    password : "",
    mobileno : ""
  })
  const handleChange = (e)=>{
    setFormdata({
      ...formdata,
      [e.target.name] : e.target.value
    })
  }
  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log(formdata)
    setFormdata({
      name : "",
      email : "",
      password : "",
      mobileno : ""
    })
    setTimeout(() => {
      navigate('/')
    }, 500);
  }
  return (
    <>
       <div className='h-screen w-full relative'>
          <div className='h-1/2 w-full bg-blue-800'>

          </div>
          <div className='h-1/2 w-full bg-blue-300'>

          </div>
          <div className='bg-white h-100 w-200 absolute top-33 left-65 rounded-4xl flex  '>
                  <div className='h-full w-1/2 '>
                      <form 
                      className='flex flex-col gap-5 justify-center h-full pl-10 '
                      >
                         <div>
                             <label 
                             className='font-semibold text-lg'
                             htmlFor="name">Enter Name : </label>
                             <input
                             className='border-2 font-medium text-lg border-white border-b-black outline-none' 
                             type="text"
                             name='name'
                             value={formdata.name}
                             onChange={handleChange}
                              />
                         </div>
                           <div>
                             <label 
                              className='font-semibold text-lg'
                             htmlFor="email">Enter Email : </label>
                             <input 
                              className='border-2 font-medium text-lg border-white border-b-black outline-none'
                             type="email"
                             name='email'
                             value={formdata.email}
                             onChange={handleChange}
                              />
                         </div>
                           <div>
                             <label 
                              className='font-semibold text-lg'
                             htmlFor="mobileno">Enter Phoneno : </label>
                             <input 
                              className='border-2 font-medium text-lg border-white border-b-black outline-none'
                             type="number"
                             name='mobileno'
                             value={formdata.mobileno}
                             onChange={handleChange}
                              />
                         </div>
                           <div className='flex flex-nowrap'>
                             <label 
                              className='font-semibold text-lg'
                             htmlFor="password">Enter Password : </label>
                             <input
                              className='border-2 font-medium text-lg border-white border-b-black outline-none' 
                             type="password"
                             name='password'
                             value={formdata.password}
                             onChange={handleChange}
                              />
                         </div>
                        <div className='w-full flex justify-center'>
                           <button 
                         className='bg-blue-400 text-white w-9/10 text-lg font-semibold py-2 rounded-md'
                         onClick={handleSubmit}>Register</button>
                        </div>
                      </form>
                  </div>
                  <div className='h-full w-1/2 overflow-hidden'>
                      <img 
                      src="Gif/login.gif" alt="" />
                  </div>
          </div>
       </div>
    </>
  )
}

export default Signup