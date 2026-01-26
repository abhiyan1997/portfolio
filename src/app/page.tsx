'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Bot, Code, Github, Linkedin, Twitter, Mail, ExternalLink, Menu, X, Terminal } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const projectsList = [
    {
      name: "Taska",
      description: "A trusted home services platform which connects users with verified service providers like electricians, plumbers, and cleaners across Nepal.",
      techStack: "React.js, Next.js, Tailwind CSS, Node.js, Express.js, MongoDB",
      link: "https://github.com/abhiyan1997/taska"
    },
    {
      name: "Election 2082",
      description: "A secure, data-driven Next.js application displaying all candidates for Nepal’s 2082 HoR election. Features advanced search, filtering, multilingual support, and strict security.",
      techStack: "Next.js, React, Tailwind CSS, TypeScript",
      link: "https://election-fptp-candidates-2082.vercel.app/"
    },
    {
      name: "HamroMat",
      description: "Hamroमत is a simple online voting platform where people can cast their votes for candidates securely. Designed to streamline the voting process with straightforward tracking.",
      techStack: "PHP, MYSQL, HTML, CSS",
      link: "https://github.com/abhiyan1997/hamromat"
    }
  ]

  return (
    <div className='bg-gradient-to-br from-amber-50 to-orange-50 min-h-screen text-slate-800 font-sans selection:bg-orange-200'>

      {/* Navbar */}
      <nav className='sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-orange-100 shadow-sm'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between items-center h-16'>
            <Link href='/' className='group'>
              <h1 className='font-bold text-2xl tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-amber-600 group-hover:from-orange-500 group-hover:to-yellow-500 transition-all'>
                Abhiyan.dev
              </h1>
            </Link>

            {/* Desktop Navigation */}
            <div className='hidden md:flex gap-8 items-center font-medium text-slate-600'>
              <a href="#services" className='hover:text-orange-600 transition-colors'>Services</a>
              <a href="#projects" className='hover:text-orange-600 transition-colors'>Projects</a>
              <a href="#contactme" className='hover:text-orange-600 transition-colors'>Contact</a>
              <Link href='resume.pdf'>
                <Button className='bg-orange-600 hover:bg-orange-700 text-white rounded-full px-6 shadow-lg shadow-orange-200 hover:shadow-orange-300 transition-all'>
                  Resume
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <div className='md:hidden'>
              <Button variant="ghost" size="icon" className="text-slate-600 z-50 relative" onClick={toggleMenu}>
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Overlay */}
        {isMenuOpen && (
          <div className='fixed inset-0 bg-white z-40 md:hidden pt-24 px-4 flex flex-col items-center gap-8 animate-in fade-in slide-in-from-top-4 duration-200'>
            <a href="#services" onClick={toggleMenu} className='text-xl font-medium text-slate-800 hover:text-orange-600'>Services</a>
            <a href="#projects" onClick={toggleMenu} className='text-xl font-medium text-slate-800 hover:text-orange-600'>Projects</a>
            <a href="#contactme" onClick={toggleMenu} className='text-xl font-medium text-slate-800 hover:text-orange-600'>Contact</a>
            <Link href='resume.pdf' onClick={toggleMenu}>
              <Button className='bg-orange-600 hover:bg-orange-700 text-white rounded-full px-8 py-6 text-lg shadow-lg'>
                Resume
              </Button>
            </Link>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24 flex flex-col-reverse md:flex-row items-center justify-between gap-12'>
        <div className='flex flex-col gap-6 md:w-1/2'>
          <div className='space-y-2'>
            <h2 className='text-orange-600 font-bold tracking-wider uppercase text-sm animate-fade-in'>Full Stack Developer</h2>
            <h1 className='text-5xl md:text-7xl font-extrabold text-slate-900 leading-tight'>
              Hey, I&apos;m <br />
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500'>Abhiyan</span>
            </h1>
          </div>

          <p className='text-slate-600 text-lg md:text-xl max-w-lg leading-relaxed'>
            I craft accessible, pixel-perfect, and performant web experiences. I love resolving complex problems with clean code and modern solutions.
          </p>

          <div className='flex items-center gap-4 text-sm font-semibold text-slate-500'>
            <Mail size={18} className='text-orange-500' />
            <span className='border-b-2 border-orange-200 hover:border-orange-500 transition-colors cursor-pointer'>abhiyan1997@gmail.com</span>
          </div>

          <div className='flex gap-8 mt-4'>
            <div>
              <span className='text-4xl font-bold text-slate-900 block'>2+</span>
              <span className='text-sm text-slate-500 uppercase tracking-widest'>Years Exp.</span>
            </div>
            <div>
              <span className='text-4xl font-bold text-slate-900 block'>10+</span>
              <span className='text-sm text-slate-500 uppercase tracking-widest'>Projects</span>
            </div>
          </div>
        </div>

        <div className='md:w-1/2 flex justify-center relative'>
          <div className='absolute inset-0 bg-gradient-to-tr from-orange-200/50 to-transparent rounded-3xl filter blur-3xl animate-pulse opacity-50'></div>
          {/* Using a placeholder or the existing image securely */}
          <div className='relative w-72 h-96 md:w-80 md:h-[30rem] rounded-2xl overflow-hidden border-4 border-white shadow-2xl ring-4 ring-orange-50'>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="profile.png" alt="Abhiyan Paudel" className='object-cover w-full h-full' />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id='services' className='py-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-orange-600 font-bold tracking-widest uppercase mb-2'>What I Do</h2>
            <h3 className='text-3xl md:text-4xl font-bold text-slate-900'>My Services</h3>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
            <div className='space-y-6'>
              {/* Service Card 1 */}
              <div className='bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all border border-slate-100 flex items-start gap-4 group hover:-translate-y-1'>
                <div className='bg-green-100 p-3 rounded-xl group-hover:bg-green-200 transition-colors'>
                  <Code className='text-green-600' size={32} />
                </div>
                <div>
                  <h4 className='text-xl font-bold text-slate-900 mb-1'>Web Development</h4>
                  <p className='text-slate-500 text-sm'>Building fast, responsive, and secure websites tailored to your needs.</p>
                  <span className='text-xs font-semibold text-green-600 mt-2 block'>5+ Projects Delivered</span>
                </div>
              </div>

              {/* Service Card 2 */}
              <div className='bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all border border-slate-100 flex items-start gap-4 group hover:-translate-y-1'>
                <div className='bg-purple-100 p-3 rounded-xl group-hover:bg-purple-200 transition-colors'>
                  <Bot className='text-purple-600' size={32} />
                </div>
                <div>
                  <h4 className='text-xl font-bold text-slate-900 mb-1'>AI Integration</h4>
                  <p className='text-slate-500 text-sm'>Incorporating smart AI solutions to automate and enhance user interactions.</p>
                  <span className='text-xs font-semibold text-purple-600 mt-2 block'>Explore Capabilities</span>
                </div>
              </div>
            </div>

            <div className='md:pl-10'>
              <h3 className='text-2xl font-bold text-slate-900 mb-6'>Solving Problems with Technology</h3>
              <p className='text-slate-600 leading-relaxed mb-6'>
                I help businesses and individuals establish a strong online presence through custom website development and AI-powered solutions.
                From sleek, responsive designs to powerful backend systems, I create websites that are not only visually appealing but also fast, secure, and scalable.
              </p>
              <p className='text-slate-600 leading-relaxed'>
                My goal is to deliver high-quality, user-friendly platforms that align with each client’s unique vision and drive real results in today’s digital world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id='projects' className='py-20 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-orange-600 font-bold tracking-widest uppercase mb-2'>Portfolio</h2>
            <h3 className='text-3xl md:text-4xl font-bold text-slate-900'>Featured Projects</h3>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {projectsList.map((project, idx) => (
              <div key={idx} className='group bg-slate-50 border border-slate-100 rounded-2xl overflow-hidden hover:shadow-xl transition-all flex flex-col h-full hover:border-orange-200'>
                <div className='p-8 flex-1 flex flex-col'>
                  <div className='flex justify-between items-start mb-4'>
                    <div className='p-3 bg-white rounded-xl shadow-sm group-hover:bg-orange-50 transition-colors'>
                      {project.name.includes('Election') ? <Terminal size={24} className='text-orange-500' /> : <Code size={24} className='text-orange-500' />}
                    </div>
                    <Link href={project.link} target='_blank' className='text-slate-400 hover:text-orange-500 transition-colors'>
                      <ExternalLink size={20} />
                    </Link>
                  </div>

                  <h3 className='text-xl font-bold text-slate-900 mb-3 group-hover:text-orange-600 transition-colors'>{project.name}</h3>
                  <p className='text-slate-600 text-sm leading-relaxed mb-6 flex-1'>
                    {project.description}
                  </p>

                  <div className='mt-auto pt-4 border-t border-slate-200'>
                    <p className='text-xs font-medium text-slate-500 mb-4 font-mono'>
                      {project.techStack}
                    </p>
                    <Link href={project.link} target='_blank' className='w-full block'>
                      <Button variant="outline" className='w-full border-orange-200 text-orange-700 hover:bg-orange-50 hover:text-orange-800 transition-all'>
                        View Project
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id='contactme' className='py-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='bg-slate-900 rounded-3xl p-8 md:p-16 text-white overflow-hidden relative shadow-2xl'>
            {/* Background Decor */}
            <div className='absolute top-0 right-0 w-64 h-64 bg-orange-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2'></div>
            <div className='absolute bottom-0 left-0 w-64 h-64 bg-purple-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20 translate-y-1/2 -translate-x-1/2'></div>

            <div className='relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
              <div className='space-y-6'>
                <h2 className='text-orange-400 font-bold tracking-widest uppercase'>Get in Touch</h2>
                <h3 className='text-4xl md:text-5xl font-bold'>Let&apos;s Build Something Amazing.</h3>
                <p className='text-slate-300 text-lg'>
                  Have a specific project in mind or just want to explore new possibilities? I&apos;m here to help.
                </p>

                <div className='flex gap-6 pt-4'>
                  <Link href='https://github.com/abhiyan1997' target='_blank' className='hover:text-orange-400 transition-transform hover:scale-110'>
                    <Github size={28} />
                  </Link>
                  <Link href='https://www.linkedin.com/in/abhiyan1997/' target='_blank' className='hover:text-orange-400 transition-transform hover:scale-110'>
                    <Linkedin size={28} />
                  </Link>
                  <Link href='http://x.com/abhiyan1997/' target='_blank' className='hover:text-orange-400 transition-transform hover:scale-110'>
                    <Twitter size={28} />
                  </Link>
                </div>
              </div>

              <div className='bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10'>
                <form className='space-y-4'>
                  <div>
                    <label className='block text-sm font-medium text-slate-300 mb-1'>Name</label>
                    <Input className='bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:ring-orange-500 focus:border-transparent' placeholder='John Doe' />
                  </div>
                  <div>
                    <label className='block text-sm font-medium text-slate-300 mb-1'>Email</label>
                    <Input className='bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:ring-orange-500 focus:border-transparent' placeholder='john@example.com' />
                  </div>
                  <div>
                    <label className='block text-sm font-medium text-slate-300 mb-1'>Message</label>
                    <Input className='bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:ring-orange-500 focus:border-transparent h-24' placeholder='Tell me about your project...' />
                  </div>
                  <Button className='w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3'>
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className='bg-white border-t border-slate-100 py-8'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4'>
          <p className='text-slate-500 text-sm'>
            &copy; {new Date().getFullYear()} Abhiyan Paudel. All rights reserved.
          </p>
          <div className='flex gap-6 text-sm font-medium text-slate-600'>
            <a href="#" className='hover:text-orange-600'>Privacy Policy</a>
            <a href="#" className='hover:text-orange-600'>Terms of Service</a>
          </div>
        </div>
      </footer>

    </div>
  )
}

export default Home