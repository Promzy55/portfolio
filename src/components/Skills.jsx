import { useState } from 'react'
export default function Skills() {
  const skillCategories = [
    {
      category: 'Frontend',
      level: 'Expert',
      skills: ['React', 'JavaScript', 'Tailwind CSS', 'HTML/CSS'],
    },
    {
      category: 'Mobile Development',
      level: 'Proficient',
      skills: ['Flutter', 'Dart', 'Cross-platform Development'],
    },
    {
      category: 'Backend',
      level: 'Proficient',
      skills: ['Laravel', 'PHP', 'Python', 'REST APIs'],
    },
    {
      category: 'Databases & Tools',
      level: 'Proficient',
      skills: ['MySQL', 'Git', 'GitHub', 'Firebase'],
    },
  ]

  return (
    <section id='skills' className='py-24 px-6'>
      <div className='max-w-6xl mx-auto'>
        <div className='mb-12'>
          <h2 className='text-4xl sm:text-5xl font-bold mb-4'>
            Skills & Expertise
          </h2>
          <div className='w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full'></div>
        </div>

        <div className='grid md:grid-cols-2 gap-8'>
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className='p-6 rounded-lg bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300'
            >
              <div className='flex justify-between items-start mb-4'>
                <h3 className='text-2xl font-bold'>{category.category}</h3>
                <span className='px-3 py-1 bg-blue-500/20 border border-blue-500/30 text-blue-300 rounded-full text-sm font-medium'>
                  {category.level}
                </span>
              </div>

              <div className='flex flex-wrap gap-2'>
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className='px-4 py-2 bg-slate-700/50 hover:bg-slate-600/50 border border-slate-600/50 hover:border-cyan-500/50 rounded-full text-gray-300 hover:text-cyan-300 text-sm font-medium transition-all duration-200'
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className='mt-8 p-6 rounded-lg bg-slate-800/30 border border-slate-700/30'>
          <h4 className='font-semibold text-gray-200 mb-3'>
            Other Competencies
          </h4>
          <p className='text-gray-400'>
            Agile/Scrum, RESTful API Design, Database Design, UI/UX Principles,
            Code Documentation, Testing & Debugging, Version Control, Problem
            Solving, Technical Communication
          </p>
        </div>
      </div>
    </section>
  )
}
