import React from 'react'

import Navbar from '../../components/Navbar'
import KaelaCom from '../../components/subComponents/Kaela'

import { Helmet } from 'react-helmet'

const Kaela = () => {
  return (
    <div>
      <Helmet>
        <title>Kaela Kovalskia - Hololive Indonesia</title>
      </Helmet>
      <Navbar />
      <KaelaCom /> 
    </div>
  )
}

export default Kaela
