import React from 'react'
import TaxiSlider from '../component/TaxiSlider'
import RideOptions from '../component/RideOptions'
import Welcome from '../component/Welcome'
import InnovationSection from '../component/InnovationSection'
import Contactsection from '../component/Contactsection'
import EarnWith from '../component/EarnWith'

const Home = () => {
  return (
    <div>
        <TaxiSlider/>
        <RideOptions/>
        <Welcome/>
        <EarnWith/>
        <InnovationSection/>
        <Contactsection/>
    </div>
  )
}

export default Home