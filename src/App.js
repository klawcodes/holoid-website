import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './routes/Home'
import Generation from './routes/Generation'
import Member from './routes/Member'

import Moona from './routes/subRoutes/Moona'
import Risu from './routes/subRoutes/Risu'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/generation' element={<Generation />} />
        <Route path='/member' element={<Member />} />
        <Route path='/member/moona-hoshinova' element={<Moona />} />
        <Route path='/member/ayunda-risu' element={<Risu />} />
      </Routes>
    </>
  );
}

export default App
