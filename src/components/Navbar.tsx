import React from 'react'
import { Link } from 'react-router-dom'

export function Navbar() {
  return (
    <nav className='text-2xl font-medium z-20 relative'>
      <ul className='flex gap-12'>
        <Link to='/motion'><li>Motion</li></Link>
        <Link to='/teste'><li>Teste</li></Link>
      </ul>
    </nav>
  )
}
