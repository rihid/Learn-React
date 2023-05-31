import React from 'react'
import { Link } from 'react-router-dom'
import {logo} from '../../utils/utility'
import Searchbar from './Searchbar'

export default function Navbar() {
  return (
    <div className='flex bg-blue-300 w-screen'>
      <Link to='/' >
        <img src={logo} alt="Logo" />
      </Link>
      <Searchbar />
    </div>
  )
}
