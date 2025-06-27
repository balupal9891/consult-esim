
import React, { useEffect, useRef, useState } from 'react';
import { Link, redirect } from 'react-router-dom';
import { useUser } from '../appContext/UserContext';
import { useNavigate, useLocation } from 'react-router-dom';
import { PiShoppingCartSimpleLight } from "react-icons/pi";
import {useCart} from '../appContext/CartContext'

export default function Header() {
  const [selected, setSelected] = useState('dashboard');
  const [showMenu, setShowMenu] = useState(false);
  const { user, setUser } = useUser();
  const navigate = useNavigate();
  const location = useLocation();
  const menuRef = useRef(null);
  const {cart} = useCart();

  useEffect(() => {
    if (location.pathname == '/') setSelected('home');
    else if (location.pathname.includes('/dashboard')) setSelected('dashboard');
    else if (location.pathname.includes('/contact')) setSelected('contact');
    else setSelected(null)
  }, [location]);

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    }

    // Attach the listener
    document.addEventListener("mousedown", handleClickOutside);
    // Clean up
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  async function handleLogout() {
    setUser(null);
    localStorage.removeItem('esim-user');
    localStorage.removeItem('esim-accessToken');
    localStorage.removeItem('esim-refreshToken');
    navigate('/login')
  }

  return (

    <header className="bg-gradient-to-r from-white via-indigo-50 to-purple-100 shadow-md w-full sticky top-0 z-50">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <div className="h-16 w-16 flex items-center">
            <a href="/">
              <img src="/esim5.png" alt="logo" className="h-10 w-auto object-contain" />
            </a>
          </div>

          {/* Navigation */}
          <nav className="w-[27vw] flex justify-between items-center text-base font-semibold">
            <Link
              to="/"
              className={`transition px-3 py-2 rounded-md hover:bg-indigo-100 hover:text-indigo-700 ${selected === 'home' ? 'text-indigo-700 font-bold underline' : 'text-gray-800'
                }`}
            >
              Home
            </Link>
            <Link
              to="/contact"
              className={`transition px-3 py-2 rounded-md hover:bg-indigo-100 hover:text-indigo-700 ${selected === 'contact' ? 'text-indigo-700 font-bold underline' : 'text-gray-800'
                }`}
            >
              Contact
            </Link>
            <Link
              to="/dashboard"
              className={`transition px-3 py-2 rounded-md hover:bg-indigo-100 hover:text-indigo-700 ${selected === 'dashboard' ? 'text-indigo-700 font-bold underline' : 'text-gray-800'
                }`}
            >
              Dashboard
            </Link>
          </nav>

          {/* User Actions */}
          {!user ? (
            <div className="ml-2 flex items-center gap-3">
              <Link
                to="/login"
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg shadow transition font-medium"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-lg shadow transition font-medium"
              >
                Signup
              </Link>
            </div>
          ) : (
            <div ref={menuRef} className="relative ml-4 flex items-center">
              {user &&
                <div 
                onClick={()=>{
                  navigate('/cart')
                }}
                className="relative inline-block mr-4  cursor-pointer">
                  <PiShoppingCartSimpleLight className="text-black w-7 h-7" />
                  {cart?.length>0 && <div className="absolute -top-1 -right-2 bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
                    {cart?.length}
                  </div>}
                </div>
              }
              <button
                onClick={() => setShowMenu(!showMenu)}
                className="w-8 h-8 bg-gradient-to-tr from-blue-500 to-purple-500 text-white cursor-pointer rounded-full inline items-center justify-center text-lg font-bold shadow-md hover:scale-105 transition"
              >
                {user?.userName?.slice(0, 1).toUpperCase()}
              </button>

              {showMenu && (
                <div className="absolute top-14 right-0 w-44 bg-white rounded-xl shadow-xl border border-gray-200 z-50 overflow-hidden animate-fade-in">
                  <Link to="/profile">
                    <div className="px-4 py-3 text-gray-800 font-medium hover:bg-indigo-50 transition cursor-pointer">
                      {user?.userName?.split(' ')[0]}
                    </div>
                  </Link>
                  <div className="border-t border-gray-100" />
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-3 text-sm text-red-600 hover:bg-red-50 font-medium transition"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </header>

  );
}