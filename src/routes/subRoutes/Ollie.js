import React from 'react'

import Navbar from '../../components/Navbar'
import OllieCom from '../../components/subComponents/Ollie'

import { Helmet } from 'react-helmet'

const Ollie = () => {
  return (
    <div>
      <Helmet>
        <title>Kureiji Ollie - Hololive Indonesia</title>
      </Helmet>
      <Navbar />
      <OllieCom />
    </div>
  )
}

export default Ollie
