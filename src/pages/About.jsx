import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { skills, experiences } from '../constants';
import {
    linkedin,
    github,
} from "../assets/icons";
import {
  headshot,
} from "../assets/images"
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <section className="max-container">
      <div className='flex flex-col sm:flex-row justify-center items-center gap-10 mb-10'>
        <img 
          src={headshot}
          alt="headshot" 
          className='rounded-full w-75'
        />
        <div className='flex flex-col text-center gap-5'>
          <h1 className="head-text">
            Hey, I'm <span className="blue-gradient_text font-semibold drop-shadow">Ian</span>,<br/>a Software Engineer
          </h1>
            <p className='text-slate-500'>
              I'm a junior student at Cornell University studying computer science with a minor in business for Engineers. I'm passionate
              about creating user-centric applications with broad communal impact!
            </p>
          <div className='flex gap-8 justify-center'>
            <a href="/assets/resume.pdf" target='_blank' rel='noopener noreferrer' className='resume-btn hover:resume-btn'>
              Resume
            </a>
            <Link to="/contact" className='about-btn'>Contact</Link>
          </div>
          <div className='flex gap-6 justify-center'>
            <a href="https://www.linkedin.com/in/ian-kan-9901b5230/" target='_blank'>
              <img src={linkedin} alt="linkedin" className=' sm:w-auto'/>
            </a>
            <a href="https://github.com/iankan04" target="_blank">
              <img src={github} alt="github" className='w-full sm:w-auto'/>
            </a>
          </div>
        </div>
      </div>
      <div className='py-10 flex flex-col'>
            <h3 className='subhead-text'>My Skills</h3>
            <div className='mt-16 flex flex-wrap gap-12'>
              {skills.map((skill) => (
                <div className='block-container w-20 h-20' key={skill.name}>
                  <div className='btn-back rounded-xl'/>
                  <div className='btn-front rounded-xl flex justify-center items-center'>
                    <img src={skill.imageUrl} alt={skill.alt} className='w-1/2 h-1/2 object-contain' />
                  </div>
                </div>
              ))}
            </div>
          </div>
      <div className="py-16">
        <h3 className="subhead-text">Work Experience</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-500'></div>
      </div>
      <div className='flex'>
        <VerticalTimeline>
          {experiences.map((experience) => (
            <VerticalTimelineElement
              key={experience.company_name}
              date={experience.date}
              icon={
                <div className='flex justify-center items-center w-full h-full'>
                  <img 
                    src={experience.icon} 
                    alt={experience.company_name}
                    className="w-[60%] h-[60%] object-contain"
                  />
                </div>
              }
              iconStyle={{ background: experience.iconBg }}
              contentStyle={{
                borderBotton: '8px',
                borderStyle: 'solid',
                borderBottomColor: experience.iconBg,
                boxShadow: 'none',
              }}
            >
              <div>
                <h3 className="text-black text-xl font-poppins font-semibold">
                  {experience.title}
                </h3>
                <p className='text-black-500 font-medium font-base' style={{margin:0}}>
                  {experience.company_name}
                </p>
              </div>
              <ul className='my-5 list-disc ml-5 space-y-2'>
                {experience.points.map((point, index) => (
                  <li key={`experience-point-${index}`} className='text-black-500/50 font-normal pl-1 text-sm'>
                    {point}
                  </li>
                ))}
              </ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  )
}

export default About
