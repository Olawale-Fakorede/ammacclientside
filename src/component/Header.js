

import React, { useState } from 'react'
import { MdNightsStay, MdSunny } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
import myLogo from "../assets/IBSD_LOGO.png"
import { motion } from 'framer-motion';

const Header = ({ darkMode, setDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <nav className='flex justify-between items-center p-6'>
            <img 
                src={myLogo} 
                alt='LOGO'
                className='h-10 w-10 md:h-12 md:w-12 lg:h-14 lg:w-14 rounded-full'
            />
            
            <IoMenu 
              className='h-7 w-5 ml-48 visible md:hidden cursor-pointer' 
              onClick={toggleMenu}
            />

            <div className='hidden md:flex h-10 max-w-full rounded-lg text-black gap-8 justify-between items-center p-6 ml-36'>
              <ul className='sm:flex md:grid lg:grid md:grid-cols-6 uppercase text-gray-900 dark:text-white gap-24'>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Contact</li>
                <li>Sermons</li>
              </ul>
            </div>

            {/* Slide-in Menu for Small Screens */}
        {menuOpen && (
          <motion.div 
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', stiffness: 80 }}
            className="absolute top-0 left-0 h-1/2 w-3/5 bg-white dark:bg-gray-900 p-6 z-50 md:hidden rounded-3xl"
          >
            <ul className='flex flex-col gap-4 uppercase text-gray-900 dark:text-white'>
              <li onClick={toggleMenu}>Home</li>
              <li onClick={toggleMenu}>About</li>
              <li onClick={toggleMenu}>Services</li>
              <li onClick={toggleMenu}>Contact</li>
              <li onClick={toggleMenu}>Sermons</li>
            </ul>
          </motion.div>
        )}

            <div onClick={() => setDarkMode(!darkMode)}>
                {
                    darkMode ?
                    <MdSunny className='text-2xl cursor-pointer'/> :
                    <MdNightsStay className='text-2xl cursor-pointer'/>
                }
            </div>
        </nav>

        
    </header>
  )
}

export default Header;