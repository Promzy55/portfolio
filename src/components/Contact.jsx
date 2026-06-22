import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In production, this would send to a backend service
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  const contactMethods = [
    {
      icon: '✉️',
      label: 'Email',
      value: 'oluwaosasranking@gmail.com',
      link: 'mailto:oluwaosasranking@gmail.com',
    },
    {
      icon: '📱',
      label: 'Phone',
      value: '+234 912 645 3785',
      link: 'tel:+2349126453785',
    },
    {
      icon: '📍',
      label: 'Location',
      value: 'Benin City, Nigeria',
      link: '#',
    },
  ]

  const socialLinks = [
    {
      icon: '🐙',
      label: 'GitHub',
      url: 'https://github.com/Promzy55',
    },
    {
      icon: '💼',
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/osagie-promise/',
    },
    {
      icon: '𝕏',
      label: 'Twitter',
      url: '#',
    },
  ]

  return (
    <section
      id='contact'
      className='py-24 px-6 bg-gradient-to-b from-transparent via-blue-950/5 to-transparent'
    >
      <div className='max-w-6xl mx-auto'>
        <div className='mb-12 text-center'>
          <h2 className='text-4xl sm:text-5xl font-bold mb-4'>Let's Connect</h2>
          <div className='w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto'></div>
          <p className='text-gray-400 mt-4 text-lg'>
            I'm always interested in hearing about new projects and
            opportunities
          </p>
        </div>

        <div className='grid md:grid-cols-2 gap-12 mb-12'>
          {/* Contact Info */}
          <div>
            <h3 className='text-2xl font-bold mb-8 text-white'>Get in Touch</h3>

            <div className='space-y-4 mb-8'>
              {contactMethods.map((method) => (
                <a
                  key={method.label}
                  href={method.link}
                  className='flex items-start gap-4 p-4 rounded-lg bg-slate-800/50 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10'
                >
                  <div className='text-2xl mt-1 flex-shrink-0'>
                    {method.icon}
                  </div>
                  <div>
                    <p className='text-gray-400 text-sm'>{method.label}</p>
                    <p className='text-white font-semibold'>{method.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className='font-semibold text-gray-200 mb-4'>
                Follow My Work
              </h4>
              <div className='flex gap-3'>
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.url}
                    target='_blank'
                    rel='noreferrer'
                    className='p-3 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700/50 hover:border-blue-500/50 text-2xl transition-all duration-200'
                    title={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className='space-y-4'>
              <div>
                <label
                  htmlFor='name'
                  className='block text-sm font-medium text-gray-300 mb-2'
                >
                  Name
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className='w-full px-4 py-2 rounded-lg bg-slate-800/50 border border-slate-700/50 focus:border-blue-500/50 focus:outline-none text-white placeholder-gray-500 transition-colors duration-200'
                  placeholder='Your name'
                />
              </div>

              <div>
                <label
                  htmlFor='email'
                  className='block text-sm font-medium text-gray-300 mb-2'
                >
                  Email
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className='w-full px-4 py-2 rounded-lg bg-slate-800/50 border border-slate-700/50 focus:border-blue-500/50 focus:outline-none text-white placeholder-gray-500 transition-colors duration-200'
                  placeholder='your@email.com'
                />
              </div>

              <div>
                <label
                  htmlFor='message'
                  className='block text-sm font-medium text-gray-300 mb-2'
                >
                  Message
                </label>
                <textarea
                  id='message'
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows='5'
                  className='w-full px-4 py-2 rounded-lg bg-slate-800/50 border border-slate-700/50 focus:border-blue-500/50 focus:outline-none text-white placeholder-gray-500 transition-colors duration-200 resize-none'
                  placeholder='Your message here...'
                ></textarea>
              </div>

              {submitted && (
                <div className='p-4 rounded-lg bg-green-500/10 border border-green-500/30 text-green-300'>
                  Thanks for reaching out! I'll get back to you soon.
                </div>
              )}

              <button
                type='submit'
                className='w-full py-3 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold transition-all duration-200 transform hover:scale-105'
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
