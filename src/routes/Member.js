import React from 'react'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import MemLayout from '../components/MemLayout'

import { Helmet } from 'react-helmet'

const Member = () => {
  return (
    <div>
      <Helmet>
        <title>Member - Hololive Indonesia</title>
      </Helmet>
      <Navbar />
      <MemLayout />
      <Footer />
    </div>
  )
}

export default Member
