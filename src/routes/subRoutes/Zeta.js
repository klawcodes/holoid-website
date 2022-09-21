import React from 'react'

import Navbar from '../../components/Navbar'
import ZetaCom from '../../components/subComponents/Zeta'

import { Helmet } from 'react-helmet'

const Zeta = () => {
  return (
    <div>
      <Helmet>
        <title>Vestia Zeta - Hololive Indonesia</title>
      </Helmet>
      <Navbar />
      <ZetaCom />
    </div>
  )
}

export default Zeta
