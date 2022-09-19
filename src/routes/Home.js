import React from 'react'

import Navbar from '../components/Navbar'
import FirstPage from '../components/FirstPage'
import Footer from '../components/Footer'

import { Helmet } from 'react-helmet'

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Hololive Indonesia</title>
      </Helmet>
      <Navbar />
      <FirstPage />
      <Footer />
    </div>
  )
}

export default Home
