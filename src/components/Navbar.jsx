import {useState} from 'react'

import { close, logo, menu } from '../assets';
import {navLinks} from '../constants';
import { id } from 'ethers/lib/utils.js';

const Navbar = () => {
  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>
      <img src={logo} alt='HooBank' className=' w-[124px] h-[32px] ' />

      <ul className=' list-none sm:flex hidden justify-end items-center flex-1' >
        {navLinks.map((nav, index) => (
          <li key={nav.id}
          >

          </li>

        ))}

      </ul>

    </nav>
  )
}

export default Navbar