import { useState } from 'react'

export default function About() {
  const highlights = [
    {
      icon: '⚡',
      title: 'Full-Stack Development',
      description:
        'Build end-to-end solutions using modern frameworks and best practices',
    },
    {
      icon: '🎯',
      title: 'Problem Solving',
      description: 'Turn complex requirements into elegant, scalable solutions',
    },
    {
      icon: '👥',
      title: 'Collaboration',
      description:
        'Work effectively in teams and communicate technical concepts clearly',
    },
  ]

  return (
    <section
      id='about'
      className='py-24 px-6 bg-gradient-to-b from-transparent via-blue-950/5 to-transparent'
    >
      <div className='max-w-6xl mx-auto'>
        <div className='mb-12'>
          <h2 className='text-4xl sm:text-5xl font-bold mb-4'>About Me</h2>
          <div className='w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full'></div>
        </div>

        <div className='grid md:grid-cols-3 gap-8 mb-12'>
          {highlights.map((item, index) => (
            <div
              key={index}
              className='p-6 rounded-lg bg-slate-800/50 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10'
            >
              <div className='text-4xl mb-3'>{item.icon}</div>
              <h3 className='text-xl font-semibold mb-2'>{item.title}</h3>
              <p className='text-gray-400'>{item.description}</p>
            </div>
          ))}
        </div>

        <div className='space-y-4'>
          <p className='text-lg text-gray-300 leading-relaxed'>
            I'm Omozuwa Osagie, a Software Engineering student and passionate
            full-stack developer based in Benin City, Nigeria. With a strong
            foundation in modern web and mobile technologies, I specialize in
            building responsive, user-centric applications that solve real-world
            problems.
          </p>

          <p className='text-lg text-gray-300 leading-relaxed'>
            My technical expertise spans React for dynamic user interfaces,
            Flutter for cross-platform mobile development, and Laravel/PHP for
            robust backend systems. I'm proficient in database design with
            MySQL, version control with Git, and REST API development. I'm
            committed to writing clean, maintainable code and following industry
            best practices.
          </p>

          <p className='text-lg text-gray-300 leading-relaxed'>
            Beyond coding, I'm passionate about continuous learning, staying
            updated with emerging technologies, and contributing to open-source
            projects. My goal is to join a dynamic team where I can grow
            professionally while delivering high-quality software solutions.
          </p>
        </div>
      </div>
    </section>
  )
}
