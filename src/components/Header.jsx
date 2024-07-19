import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='bg-white shadow-md'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-4'>
        <Link to='/'>
          <h1 className='font-bold text-lg sm:text-2xl flex items-center'>
            <span className='text-blue-500'>Easy</span>
            <span className='text-blue-700'>Estate</span>
          </h1>
        </Link>
        <form className='bg-gray-100 p-2 rounded-md flex items-center shadow-inner'>
          <input type='text' placeholder='Search...' className='bg-transparent focus:outline-none w-24 sm:w-64 px-2' />
          <FaSearch className='text-gray-600' />
        </form>
        <ul className='flex gap-6'>
          <li className='hidden sm:block'>
            <Link to='/' className='text-gray-700 relative group'>
              Home
              <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full'></span>
            </Link>
          </li>
          <li className='hidden sm:block'>
            <Link to='/about' className='text-gray-700 relative group'>
              About
              <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full'></span>
            </Link>
          </li>
          <li>
            <Link to='/sign-in' className='text-gray-700 relative group'>
              Sign in
              <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full'></span>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
