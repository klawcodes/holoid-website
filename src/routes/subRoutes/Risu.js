import React from 'react'

import Navbar from '../../components/Navbar'
import RisuCom from '../../components/subComponents/Risu'

import { Helmet } from 'react-helmet'

const Risu = () => {
  return (
    <div>
      <Helmet>
        <title>Ayunda Risu - Hololive Indonesia</title>
      </Helmet>
      <Navbar />
      <RisuCom />
    </div>
  )
}

export default Risu
