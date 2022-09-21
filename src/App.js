import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './routes/Home'
import Generation from './routes/Generation'
import Member from './routes/Member'

import Moona from './routes/subRoutes/Moona'
import Risu from './routes/subRoutes/Risu'
import Iofi from './routes/subRoutes/Iofi'

import Reine from './routes/subRoutes/Reine'
import Ollie from './routes/subRoutes/Ollie'
import Anya from './routes/subRoutes/Anya'

import Kobo from './routes/subRoutes/Kobo'
import Kaela from './routes/subRoutes/Kaela'
import Zeta from './routes/subRoutes/Zeta'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/generation' element={<Generation />} />
        <Route path='/member' element={<Member />} />
        <Route path='/member/moona-hoshinova' element={<Moona />} />
        <Route path='/member/ayunda-risu' element={<Risu />} />
        <Route path='/member/airani-iofifteen' element={<Iofi />} />
        <Route path='/member/pavolia-reine' element={<Reine />} />
        <Route path='/member/kureiji-ollie' element={<Ollie />} />
        <Route path='/member/anya-melfissa' element={<Anya />} />
        <Route path='/member/kobo-kanaeru' element={<Kobo />} />
        <Route path='/member/kaela-kovalskia' element={<Kaela />} />
        <Route path='/member/vestia-zeta' element={<Zeta />} />
      </Routes>
    </>
  );
}

export default App
