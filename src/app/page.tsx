import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { link } from 'fs'
import { Bot, Code, Computer, Github, Linkedin, Twitter, X } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Home = () => {

  const projectsList = [
    {
      name: "Taska",
      description: "A trusted home services platform which connects users with verified service providers like electricians, plumbers, and cleaners across Nepal.",
      techStack: "React.js, Next.js, Tailwind CSS, Node.js, Express.js, MongoDB",
      link: "https://github.com/abhiyan1997/taska"
    },
    {
      name: "HamroMat",
      description: "Hamroमत is a simple online voting platform where people can cast their votes for mayoral candidates. It’s designed to make the voting process easy and secure. Users select their candidates, and the system keeps track of votes in a straightforward way.",
      techStack: "PHP, MYSQL, HTML, CSS",
      link: "https://github.com/abhiyan1997/hamromat"
    },
    {
      name: "Hangman",
      description: "A React-based Hangman game with an animal-themed word list, fun UI, and progressive image feedback.",
      techStack: "React.js, Next.js, Tailwind CSS",
      link: "https://github.com/abhiyan1997/hangman"
    }
  ]

  return (
    <div className='bg-amber-50 min-h-screen'>

      {/* Navbar */}
      <div className='flex justify-between items-center p-5'>
        <div>
         <Link href='/'> <h1 className='font-bold text-[20px]'>Abhiyan Paudel</h1></Link>
        </div>
        <div className='flex gap-10  list-none'>
          <a href="#services"><li>Services</li></a>
          <a href="#projects"><li>Projects</li></a>
          <a href="#contactme"><li>Contact</li></a>
        </div>
        <div>
          <Link href='resume.pdf'><Button>Resume</Button></Link>
        </div>
      </div>

      {/* Main Content */}
      <div className='flex justify-around mt-20'>
        <div className='flex flex-col justify-between'>
          <div>
            <h1 className='text-[50px] font-bold'>Hey There, <br /> I'm Abhiyan </h1>
          </div>
          <div>
            <p className='underline text-orange-500 font-bold'>abhiyan1997@gmail.com </p>
          </div>
          <div className='flex gap-5 mt-5 mb-5 font-bold '>
            <span className='text-[30px] '>0</span>
            <span className='text-[20px] italic'>YEARS <br /> EXPERIENCE</span>
          </div>
        </div>

        <div className='items-center'>
          <img src="profile.png" alt="Profile" className='w-100 h-min-screen' />
        </div>

        <div className='flex flex-col justify-between'>
          <div>
            
          </div>
          <div>
            <p className='w-[300px] tracking-[1px] p-2'>I am a passionate full stack web developer with experience in building dynamic, user-friendly, and scalable applications. I enjoy turning ideas into reality through clean code, modern frameworks, and reliable databases, while continuously exploring new technologies to expand my expertise.</p>
          </div>
          <div>
            <p className='font-bold m-2 p-2 text-[20px]'>Full Stack Developer</p>
          </div>
        </div>
      </div>

      {/* What Do I Help Section */}
      <div id='services' className='mt-20 bg-white p-5'>
        <h1 className='text-center text-[35px] font-bold p-2 tracking-[2px] text-orange-500'>My Services</h1>
      <div className='bg-white flex justify-between'>
        <div className='flex flex-col m-2 p-2'>
          <div className='flex border border-black p-5 m-5 rounded-lg w-110'>
            <div>
              <Code className='bg-green-300 p-2 rounded-[25px] m-2' size={40}></Code>
            </div>
            <div className='flex flex-col'>
              <span className='text-[20px] font-bold'>Website Development</span>
              <span className='text-gray-500'>5 Projects</span>
            </div>
          </div>

          <div className='flex border border-black p-5 m-5 rounded-lg w-110'>
            <div>
              <Bot className='bg-green-300 p-2 rounded-[25px] m-2' size={40}></Bot>
            </div>
            <div className='flex flex-col'>
              <span className='text-[20px] font-bold'>AI Engineering</span>
              <span className='text-gray-500'>0 Projects</span>
            </div>
          </div>
        </div>

        <div className='flex flex-col m-2 p-2 w-[50%]'>
          <h1 className='text-center text-[35px] font-bold m-2 p-2 tracking-[3px] text-orange-500'>What do I help?</h1>
          <div>
            <p className='w-[700px]'>I help businesses and individuals establish a strong online presence through custom website development and AI-powered solutions. From sleek, responsive designs to powerful backend systems, I create websites that are not only visually appealing but also fast, secure, and scalable. <br /><br /> My goal is to deliver high-quality, user-friendly platforms that align with each client’s unique vision and drive real results in today’s digital world.</p>
          </div>
          <div className='flex gap-20 justify-center mt-10'>
            <div>
              <h1 className='text-[35px] font-bold'>5+</h1>
              <span className='text-gray-500'>Project Completed</span>
            </div>
            <div>
              <h1 className='text-[35px] font-bold'>0+</h1>
              <span className='text-gray-500'>Happy Clients</span>
            </div>
          </div>
        </div>
      </div>
      </div>

      {/* Projects */}
      <div id='projects'>
        <h1 className='text-center text-[35px] font-bold m-2 p-2 tracking-[3px] text-orange-500'>Projects</h1>
        <div className='flex m-2 p-2'>
          {projectsList.map((item, idx) => (
            <div key={idx} className='border border-black p-5 m-5 rounded-lg w-110 flex flex-col gap-2'>
              <span className='text-[30px] font-bold'>{item.name}</span>
              <p className='mt-2 mb-2'>{item.description}</p>
              <span className='text-gray-500'>Tech Stack: {item.techStack}</span>
              <Button className='m-2 p-2 w-40'><Github></Github><Link href={item.link} target='_blank'>View in Github</Link></Button>
            </div>
          ))}
        </div>
      </div>

      {/* Contact */}
      <div id='contactme' className='bg-white m-2 p-2'>
        <h1 className='text-center text-[35px] font-bold m-2 p-2 tracking-[3px] text-orange-500'>Contact Me</h1>
        <div className='flex justify-between m-5 p-5'>
          <div className='flex flex-col m-2 p-2 gap-5'>
            <p className='text-[20px] font-bold'>Email, call or complete the form to learn how I can solve your problems related to tech.</p>
            <span className='text-gray-500'>abhiyan1997@gmail.com</span>
            <div className='flex gap-10 mt-5'>
              <Link href='https://github.com/abhiyan1997' target='_blank'><Github></Github></Link>
              <Link href='https://www.linkedin.com/in/abhiyan1997/' target='_blank'><Linkedin></Linkedin></Link>
              <Link href='http://x.com/abhiyan1997/' target='_blank'><Twitter></Twitter></Link>
            </div>
          </div>

          <div className='border border-black p-5 rounded-lg w-[50%]'>
            <form action="">
              <div className='flex flex-col m-2 p-2'>
                <label>Name: </label>
                <Input className='w-120'></Input>
              </div>
              <div className='flex flex-col m-2 p-2 w-[50%]'>
                <label>Contact Number: </label>
                <Input className='w-120'></Input>
              </div>
              <div className='flex flex-col m-2 p-2 w-[50%]'>
                <label>Email: </label>
                <Input className='w-120'></Input>
              </div>
              <div className='flex flex-col m-2 p-2 w-[50%]'>
                <Button>Submit</Button>
              </div>
            </form>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home