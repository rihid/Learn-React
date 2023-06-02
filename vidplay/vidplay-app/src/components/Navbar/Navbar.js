import React from 'react'
import { Link } from 'react-router-dom'
import {logo} from '../../utils/utility'
import Searchbar from './Searchbar'

export default function Navbar() {
  return (
    <div className='flex justify-between items-center bg-white w-screen px-4 sticky top-0 py-1'>
      <Link to='/' >
        <img src={logo} alt="Logo" className='h-10' />
      </Link>
      <Searchbar />
    </div>
  )
}
