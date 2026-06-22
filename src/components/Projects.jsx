import { useState } from 'react'

export default function Projects() {
  const projects = [
    {
      title: 'Cryptocurrency Tracker',
      description:
        'A comprehensive React-based web application that tracks real-time cryptocurrency prices, market trends, and analytics. Features interactive charts, portfolio tracking, and price alerts using external APIs.',
      tech: ['React', 'JavaScript', 'Tailwind CSS', 'REST API', 'Charts.js'],
      highlights: [
        'Real-time price updates',
        'Interactive data visualization',
        'Responsive design',
        'Performance optimized',
      ],
      links: {
        github: 'https://github.com/Promzy55',
        demo: '#',
      },
    },
    {
      title: 'BabyShop Mobile App',
      description:
        'A full-featured Flutter e-commerce application for baby products. Includes user authentication, shopping cart, product management, and payment integration. Built with modern mobile development practices.',
      tech: ['Flutter', 'Dart', 'Firebase', 'REST API', 'Payment Gateway'],
      highlights: [
        'Secure authentication',
        'Shopping cart & checkout',
        'Product catalog',
        'Order history',
      ],
      links: {
        github: 'https://github.com/Promzy55',
        demo: '#',
      },
    },
    {
      title: 'Number Guessing Game',
      description:
        'An interactive Python-based number guessing game with multiple difficulty levels, score tracking, and leaderboard functionality. Demonstrates game logic and user interaction patterns.',
      tech: ['Python', 'Game Development', 'Data Structures'],
      highlights: [
        'Multiple difficulty levels',
        'Score tracking',
        'Interactive gameplay',
        'Replay functionality',
      ],
      links: {
        github: 'https://github.com/Promzy55',
        demo: '#',
      },
    },
  ]

  return (
    <section id='projects' className='py-24 px-6'>
      <div className='max-w-6xl mx-auto'>
        <div className='mb-12'>
          <h2 className='text-4xl sm:text-5xl font-bold mb-4'>
            Featured Projects
          </h2>
          <div className='w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full'></div>
          <p className='text-gray-400 mt-4'>
            A selection of my recent work showcasing full-stack development
            capabilities
          </p>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {projects.map((project) => (
            <div
              key={project.title}
              className='group rounded-xl overflow-hidden bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 flex flex-col'
            >
              {/* Header with accent */}
              <div className='h-1 bg-gradient-to-r from-blue-500 to-cyan-500 group-hover:shadow-lg group-hover:shadow-blue-500/50'></div>

              <div className='p-6 flex-grow flex flex-col'>
                <h3 className='text-xl font-bold mb-2 text-white group-hover:text-blue-300 transition-colors'>
                  {project.title}
                </h3>

                <p className='text-gray-400 text-sm mb-4 flex-grow'>
                  {project.description}
                </p>

                {/* Highlights */}
                <div className='mb-4 space-y-1'>
                  {project.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className='flex items-center gap-2 text-gray-400 text-sm'
                    >
                      <span className='text-cyan-400'>✓</span>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className='mb-4 flex flex-wrap gap-2'>
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className='px-3 py-1 bg-blue-500/10 border border-blue-500/30 text-blue-300 rounded-full text-xs font-medium'
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className='flex gap-3 pt-4 border-t border-slate-700/50'>
                  <a
                    href={project.links.github}
                    target='_blank'
                    rel='noreferrer'
                    className='flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-slate-700/50 hover:bg-slate-600/50 text-gray-300 hover:text-white transition-all duration-200 text-sm font-medium'
                  >
                    <svg
                      className='w-4 h-4'
                      fill='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
                    </svg>
                    <span>Code</span>
                  </a>
                  <a
                    href={project.links.demo}
                    className='flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-blue-600/50 hover:bg-blue-700/50 text-white transition-all duration-200 text-sm font-medium'
                  >
                    <svg
                      className='w-4 h-4'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
                      />
                    </svg>
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects CTA */}
        <div className='mt-12 text-center'>
          <a
            href='https://github.com/Promzy55'
            target='_blank'
            rel='noreferrer'
            className='inline-flex items-center gap-2 px-8 py-3 rounded-lg border border-blue-500/50 hover:border-blue-500 text-blue-400 hover:text-blue-300 font-semibold transition-all duration-200'
          >
            <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
              <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
            </svg>
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
