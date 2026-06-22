import { useState } from 'react'
export default function Hero() {
  return (
    <section className='min-h-screen pt-20 flex items-center justify-center px-6'>
      <div className='max-w-4xl w-full text-center'>
        {/* Badge */}
        <div className='inline-block mb-6'>
          <span className='px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-sm font-medium'>
            Software Engineer & Full-Stack Developer
          </span>
        </div>

        {/* Main Headline */}
        <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-400'>
          Omozuwa Osagie
        </h1>

        {/* Subheading */}
        <p className='text-xl sm:text-2xl text-gray-300 mb-6 leading-relaxed'>
          Building scalable web and mobile applications with React, Flutter, and
          modern web technologies
        </p>

        {/* Description */}
        <p className='text-lg text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed'>
          Software Engineering student passionate about creating robust,
          user-focused solutions. Experienced in full-stack development, cloud
          deployment, and building products that solve real-world problems.
        </p>

        {/* CTA Buttons */}
        <div className='flex flex-col sm:flex-row gap-4 justify-center mb-12'>
          <a
            href='#projects'
            className='inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105'
          >
            View My Work
            <span>→</span>
          </a>

          <a
            href='#contact'
            className='inline-flex items-center justify-center gap-2 border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200'
          >
            Get In Touch
          </a>
        </div>

        {/* Social Links */}
        <div className='flex justify-center gap-4'>
          <a
            href='https://github.com/Promzy55!'
            target='_blank'
            rel='noreferrer'
            className='p-3 bg-slate-800/50 hover:bg-slate-700 rounded-lg transition-colors duration-200 text-gray-400 hover:text-white'
            title='GitHub'
          >
            <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 24 24'>
              <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
            </svg>
          </a>
          <a
            href='mailto:oluwaosasranking@gmail.com'
            className='p-3 bg-slate-800/50 hover:bg-slate-700 rounded-lg transition-colors duration-200 text-gray-400 hover:text-white'
            title='Email'
          >
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
                d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
              />
            </svg>
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className='mt-20 flex flex-col items-center animate-bounce'>
          <span className='text-gray-500 text-sm mb-2'>Scroll to explore</span>
          <svg
            className='w-6 h-6 text-gray-500'
            fill='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path d='M19 14l-7 7m0 0l-7-7m7 7V3'></path>
          </svg>
        </div>
      </div>
    </section>
  )
}
