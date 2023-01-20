import { motion, useIsPresent } from 'framer-motion'
import React from 'react'
import { Link } from 'react-router-dom'

export function Teste() {


  return (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: '0%' }}
      transition={{ duration: 5, ease: 'easeOut', delay: 0.5 }}
      exit={{ opacity: 1 }}
      className='text-gray-900 absolute top-0 left-0 w-full h-full bg-orange-100 lg:px-48 px-16'
    >
      <main>
        <div className='my-40 p-1'>
          <h1 className=' text-6xl text-center lg:text-right lg:text-9xl'>Happy Pickle</h1>
        </div>
        <div className='flex justify-between'>
          <div>
            <h2>Design</h2>
            <h2>Company</h2>
            <h2>2022</h2>
          </div>
          <div>
            <h3>This picke gonna make</h3>
            <h3>Scottish design</h3>
            <h3>Click Contact for cool</h3>
          </div>
        </div>
      </main>
    </motion.div>
  )
}
