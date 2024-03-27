import React from 'react'
import Hero from './Hero/Hero'
import Featured from './featured/Featured'
import Resent from './recent/Resent'
import Awards from './awards/Awards'
import Location from './location/Location'
import Team from './team/Team'
import Price from './price/Price'

const Home = () => {
  return (
    <>
    <Hero/>
    <Featured/>
    <Resent/>
    <Awards/>
    <Location/>
    <Team/>
    <Price/>
    </>
  )
}

export default Home