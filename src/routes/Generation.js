import React from 'react'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import GenCom from '../components/Generation'

import { Helmet } from 'react-helmet'

const Generation = () => {
  return (
    <div>
      <Helmet>
        <title>Generation - Hololive Indonesia</title>
      </Helmet>
      <Navbar />
      <GenCom />
      <Footer />
    </div>
  )
}

export default Generation
