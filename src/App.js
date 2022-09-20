import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './routes/Home'
import Generation from './routes/Generation'
import Member from './routes/Member'

import Moona from './routes/subRoutes/Moona'
import Risu from './routes/subRoutes/Risu'
import Iofi from './routes/subRoutes/Iofi'
import Reine from './routes/subRoutes/Reine.js'

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
      </Routes>
    </>
  );
}

export default App
