import React from 'react'

import Navbar from '../../components/Navbar'
import ReineCom from '../../components/subComponents/Reine'

import { Helmet } from 'react-helmet'

const Reine = () => {
  return (
    <div>
      <Helmet>
        <title>Pavolia Reine - Hololive Indonesia</title>
      </Helmet>
      <Navbar />
      <ReineCom />
    </div>
  )
}

export default Reine
