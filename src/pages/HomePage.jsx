import React from 'react'
import Navbar from '../components/Navbar'
import heroImage from '../assets/hero.png'
import { useNavigate } from 'react-router-dom'
import { motion } from 'motion/react'

const HomePage = () => {
  const navigate = useNavigate()
  return (
    <motion.div initial={{y: "-200vh"} } animate={{y:0, transition:{duration:1}}} >

    <div className=' h-[calc(100vh-4rem)] flex flex-col gap-8 px-4 md:px-8 lg:px-12 py-4 md:py-8 lg:py-12 lg:flex-row'>
      {/* image section */}
      <div className='h-1/2 lg:h-full lg:w-1/2 '>
        <img className='w-full h-full object-contain'
         src={heroImage} alt="" />
      </div>
      {/* text section */}
      <div className='h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-2 justify-center'>
        <h1 className='text-4xl font-bold'>Aditya Kumar</h1>
        <p>A self-taught full stack developer with a background in civil engineering. I transitioned into web development as i've been interested in coding from an early age.</p>
        
        <div className='space-x-4 mt-2'>
          <button 
          onClick={()=>navigate('/projects')} 
          className='bg-black text-white rounded-lg py-2 px-2 cursor-pointer'>View My Works</button>
          <button onClick={()=>navigate('/contact')} 
          className='border ring-1 rounded-lg py-2 px-2 cursor-pointer'>Contact Me</button>
        </div>
      </div>
      
    </div>
          </motion.div>
  )
}

export default HomePage
