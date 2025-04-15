import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from "motion/react"
import { Toaster } from 'react-hot-toast'

const RootLayout = () => {

    const params = useLocation()
    console.log(params.pathname.substring(1))
  

  return (
    <AnimatePresence mode='wait'>
      <Toaster
      position='bottom-right'/>
    <div key={params.pathname} className='min-h-screen bg-gradient-to-b  from-blue-50 to-red-100'>

      <motion.div 
      className='h-screen w-screen bg-black fixed z-40 rounded-b-[100px]'
      animate={{height: "0vh"}}
      exit={{height: "140vh"}}
      transition={ {duration: 0.5, ease: "easeOut"}}
      />
      <motion.div 
      className="m-auto fixed w-fit h-fit top-0  bottom-0 left-0 right-0 text-white text-6xl z-50" 
      initial={{opacity: 1}}
      animate={{opacity: 0}}
      exit={{opacity: 0}}
      transition={ {duration: 0.8, ease: "easeOut"}}
      >{params.pathname.charAt(1).toUpperCase() + params.pathname.slice(2)}</motion.div>
      <motion.div 
      className='h-screen w-screen bg-black fixed z-30 rounded-t-[100px] bottom-0'
      initial={{height: "140vh"}}
      animate={{height: "0vh", transition:{ delay: 0.5 , duration: 0.5, ease: "easeOut"}}}
      />
      <Navbar/>
      <Outlet/>
    </div>
    </AnimatePresence>
  )
}

export default RootLayout
