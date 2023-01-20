import { motion, useIsPresent } from 'framer-motion'
import React from 'react'
import { Link } from 'react-router-dom'

export function Motion() {

  return (
    <motion.main
      initial={{ x: '100%' }}
      animate={{ x: '0%' }}
      transition={{ duration: 0.75, ease: 'easeOut' }}
      exit={{ opacity: 1 }}
      className='text-gray-900 absolute top-0 left-0 w-full h-full bg-red-400 lg:px40'>
      <div className='my-40 p-1 overflow-hidden'>
        <motion.h1
          animate={{ y: 0 }}
          initial={{ y: '100%' }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className='text-6xl text-center'
        >Let's Talk</motion.h1>
      </div>
      <div className='flex gap-40'>
        <div className='lg:text-2xl text-base'>
          <h4 className='  lg:text-right lg:text-9xl'>FInd me</h4>
        </div>
        <div className='lg:text-6xl text-2xl underline'>
          <ul>
            <li className='pb-2'>Twitter</li>
            <li className='pb-2'>Instagram</li>
            <li className='pb-2'>Linkedin</li>
            <li className='pb-2'>Dribble</li>
          </ul>
        </div>
      </div>
    </motion.main>
  )
}
