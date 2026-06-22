import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const links = ['about', 'skills', 'experience', 'projects', 'contact']

  return (
    <nav className='fixed top-0 w-full bg-slate-950/95 backdrop-blur-lg border-b border-slate-800/50 z-50'>
      <div className='max-w-6xl mx-auto px-6 py-4'>
        <div className='flex justify-between items-center'>
          {/* Logo */}
          <div className='flex items-center gap-2'>
            <div className='w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center'>
              <span className='text-white font-bold text-sm'>OO</span>
            </div>
            <span className='font-bold text-lg hidden sm:block'>Omozuwa</span>
          </div>

          {/* Desktop Navigation */}
          <div className='hidden md:flex space-x-8'>
            {links.map((link) => (
              <a
                key={link}
                href={`#${link}`}
                className='text-gray-300 hover:text-white capitalize transition-colors duration-200 text-sm font-medium'
              >
                {link}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className='hidden md:block'>
            <a
              href='#contact'
              className='bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-6 py-2 rounded-lg text-sm font-medium transition-all duration-200'
            >
              Get In Touch
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className='md:hidden text-gray-300 hover:text-white'
          >
            {isOpen ? (
              <svg
                className='w-6 h-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            ) : (
              <svg
                className='w-6 h-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className='md:hidden mt-4 pb-4 border-t border-slate-800 pt-4 space-y-3'>
            {links.map((link) => (
              <a
                key={link}
                href={`#${link}`}
                onClick={() => setIsOpen(false)}
                className='block text-gray-300 hover:text-white capitalize transition-colors'
              >
                {link}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
