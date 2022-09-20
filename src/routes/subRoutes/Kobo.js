import React from 'react'

import Navbar from '../../components/Navbar'
import KoboCom from '../../components/subComponents/Kobo'

import { Helmet } from 'react-helmet'


const Kobo = () => {
  return (
    <div>
      <Helmet>
        <title>Kobo Kanaeru - Hololive Indonesia</title>
      </Helmet>
      <Navbar />
      <KoboCom />
    </div>
  )
}

export default Kobo
