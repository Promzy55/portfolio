import { useState } from 'react'

export default function Experience() {
  const experiences = [
    {
      title: 'Software Engineering Student',
      company: 'University/Educational Institution',
      period: 'Present',
      type: 'Education',
      highlights: [
        'Developing expertise in full-stack web development',
        'Building production-quality applications',
        'Collaborating on team projects',
      ],
    },
    {
      title: 'Full-Stack Developer',
      company: 'Personal & Open Source Projects',
      period: '2023 - Present',
      type: 'Self-Directed',
      highlights: [
        'Created multiple real-world applications',
        'Deployed and maintained web services',
        'Implemented responsive UI design patterns',
      ],
    },
  ]

  const achievements = [
    'Built and deployed 3+ production-ready applications',
    'Proficient in React, Flutter, Laravel, and Python ecosystems',
    'Strong foundation in database design and optimization',
    'Experienced with deployment and DevOps practices',
    'Committed to clean code and best practices',
  ]

  return (
    <section
      id='experience'
      className='py-24 px-6 bg-gradient-to-b from-transparent via-slate-900/20 to-transparent'
    >
      <div className='max-w-6xl mx-auto'>
        <div className='mb-12'>
          <h2 className='text-4xl sm:text-5xl font-bold mb-4'>
            Experience & Achievements
          </h2>
          <div className='w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full'></div>
        </div>

        <div className='grid md:grid-cols-2 gap-8 mb-12'>
          {/* Experience Timeline */}
          <div>
            <h3 className='text-2xl font-bold mb-6 text-gray-200'>
              Background
            </h3>
            <div className='space-y-6'>
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className='p-6 rounded-lg bg-slate-800/50 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300'
                >
                  <div className='flex items-start gap-4'>
                    <div className='w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0'></div>
                    <div className='flex-grow'>
                      <h4 className='text-lg font-semibold text-white'>
                        {exp.title}
                      </h4>
                      <p className='text-blue-400 text-sm font-medium'>
                        {exp.company}
                      </p>
                      <div className='flex items-center gap-2 text-gray-400 text-sm mt-2 mb-3'>
                        <span>📅</span>
                        <span>{exp.period}</span>
                        <span className='px-2 py-0.5 bg-blue-500/10 border border-blue-500/20 rounded text-xs'>
                          {exp.type}
                        </span>
                      </div>
                      <ul className='space-y-1'>
                        {exp.highlights.map((highlight, i) => (
                          <li
                            key={i}
                            className='text-gray-400 text-sm flex items-start gap-2'
                          >
                            <span className='text-cyan-400 mt-1'>•</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h3 className='text-2xl font-bold mb-6 text-gray-200'>
              Key Achievements
            </h3>
            <div className='space-y-3'>
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className='p-4 rounded-lg bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 hover:border-blue-500/50 transition-all duration-300'
                >
                  <div className='flex items-start gap-3'>
                    <span className='text-2xl mt-0.5'>🏆</span>
                    <p className='text-gray-300'>{achievement}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Stats */}
            <div className='mt-8 grid grid-cols-2 gap-4'>
              <div className='p-4 rounded-lg bg-slate-800/50 border border-slate-700/50 text-center'>
                <p className='text-3xl font-bold text-blue-400'>3+</p>
                <p className='text-gray-400 text-sm mt-1'>Projects Completed</p>
              </div>
              <div className='p-4 rounded-lg bg-slate-800/50 border border-slate-700/50 text-center'>
                <p className='text-3xl font-bold text-cyan-400'>4+</p>
                <p className='text-gray-400 text-sm mt-1'>Tech Stacks</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
