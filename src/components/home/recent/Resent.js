import React from 'react'
import Heading from '../../common/Heading'
import ResentCard from './ResentCard'
import "./resent.css"

const Resent = () => {
  return (
    <>
    <section className='recent padding'>
        <div className="container">
            <Heading title="Recent Property Listed" subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt uy labore et dolore magna aliqua. Ut enim ad minim veniam."/>
            <ResentCard/>
        </div>
    </section>
    
    </>
  )
}

export default Resent