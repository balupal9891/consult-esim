
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [selected, setSelected] = useState('home');

  return (
    <header className="bg-white shadow-md w-full sticky top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          <div className="h-16 w-16">
            <a href="">
              <img src="esim5.png" alt="logo" />
            </a>
          </div>

          <nav className="w-[27vw] flex justify-between items-center text-lg">
            <Link
              to="/"
              className={` hover:text-indigo-600 font-medium mx-4 ${selected === 'home' ? 'text-indigo-600' : 'text-gray-700'}`}
              onClick={() => setSelected('home')}
            >
              Home
            </Link>
            <Link 
            to="/contact" 
            className={` hover:text-indigo-600 font-medium mx-4 ${selected === 'contact' ? 'text-indigo-600' : 'text-gray-700'}`}
            onClick={() => setSelected('contact')}
            >
              Contact
            </Link>
            <Link 
            to="/dashboard" 
            className={` hover:text-indigo-600 font-medium mx-4 ${selected === 'dashboard' ? 'text-indigo-600' : 'text-gray-700'}`}
            onClick={() => setSelected('dashboard')}
            >
              Dashboard
            </Link>
          </nav>

          <div className='ml-2'>
            <Link to={'/login'}  className="btn bg-blue-600 ml-2 px-8">Login</Link>
            <Link to={'/signup'} className="btn bg-blue-600 ml-2 px-8">signup</Link>
          </div>


        </div>
      </div>
    </header>
  );
}