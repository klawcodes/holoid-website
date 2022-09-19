import React from 'react'

import Navbar from '../../components/Navbar'
import MoonaCom from '../../components/subComponents/Moona'

import { Helmet } from 'react-helmet'


const Moona = () => {
  return (
    <div>
      <Helmet>
        <title>Moona Hoshinova - Hololive Indonesia</title>
      </Helmet>
      <Navbar />
      <MoonaCom />
    </div>
  )
}

export default Moona
