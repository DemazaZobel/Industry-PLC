import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../assets/logo_only.png";

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'Manufacture', path: '/manufacture' },
  { name: 'Import-Export', path: '/cargo' },
  { name: 'Construction', path: '/construction' },
  { name: 'Contact', path: '/contact' },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
<header className="bg-white/30 text-white shadow-lg sticky top-10 z-50 
  lg:w-[75%] lg:left-[13%] 
  md:w-[90%] md:left-[6%] 
  sm:w-[90%] 
  w-[90%] left-[5%] 
  rounded-2xl border border-gray-200">
      <div className="container mx-auto flex justify-between items-center px-4 py-2 h-[72px]">
        {/* Logo */}
        <div className="h-full flex flex-row items-center">
          <NavLink to="/" className="hover:text-orange-400 block h-full flex flex row">
            <img
              src={logo}
              alt="logo"
              className="h-full object-contain max-h-[60px] w-auto"
            /> <h1 className='mt-4 text-text'>D<span className='text-secondary'>A</span>NKAL <span className='text-secondary'>INDUSTRIAL P<span className='text-text'>.</span>L<span className='text-text'>.</span>C</span></h1>
          </NavLink>
          
        </div>

        {/* Navigation */}
        <nav>
          <ul className="hidden md:flex space-x-6">
            {navItems.map(({ name, path }) => (
              <li key={name}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    isActive
                      ? 'text-primary font-semibold'
                      : 'text-text hover:text-orange-400 transition'
                  } 
                >
                  {name}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Toggle */}
          <button
            className="sm:hidden focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-secondary"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"

              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Mobile Dropdown */}
          {menuOpen && (
            <ul className="absolute bg-text/90 top-full left-0 w-full text-center md:hidden z-40">
              {navItems.map(({ name, path }) => (
                <li key={name} className="border-b border-gray-700 py-3">
                  <NavLink
                    to={path}
                    className={({ isActive }) =>
                      isActive
                        ? 'text-orange-400 font-semibold'
                        : 'hover:text-orange-400 transition'
                    }
                    onClick={() => setMenuOpen(false)}
                  >
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
