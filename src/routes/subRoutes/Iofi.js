import React from 'react'

import Navbar from '../../components/Navbar'
import IofiCom from '../../components/subComponents/Iofi'

import { Helmet } from 'react-helmet'

const Iofi = () => {
  return (
    <div>
      <Helmet>
        <title>Airani Iofifteen - Hololive Indonesia</title>
      </Helmet>
      <Navbar/>
      <IofiCom/>
    </div>
  )
}

export default Iofi
