import React from 'react'

import Navbar from '../../components/Navbar'
import AnyaCom from '../../components/subComponents/Anya'

import { Helmet } from 'react-helmet'

const Anya = () => {
  return (
    <div>
      <Helmet>
        <title>Anya Melfisa - Hololive Indonesia</title>
      </Helmet>
      <Navbar />
      <AnyaCom />
    </div>
  )
}

export default Anya
