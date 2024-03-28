import React from 'react'
import "./about.css"
import Back from '../common/Back'
import img from "../images/about.jpg"
import Heading from '../common/Heading'


const About = () => {
  return (
    <>
    <section>
        <Back name="About Us" title="About Us - Who We Are?" cover={img} />
        <div className='container flex mtop'>
            <div className='left row'>
                <Heading title='Our Agency Story' subtitle='Check out our company story and work process'/>
                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
            <button className='btn2'>More About Us</button>
            </div>
             <div className='right row'>
            <img src='./immio.jpg' alt='' />
          </div>
        </div>
    </section>
    </>
  )
}

export default About