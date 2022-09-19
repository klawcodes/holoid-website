import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './routes/Home'
import Generation from './routes/Generation'
import Member from './routes/Member'

import Moona from './routes/subRoutes/Moona'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/generation' element={<Generation />} />
        <Route path='/member' element={<Member />} />
        <Route path='/member/moona-hoshinova' element={<Moona />} />
      </Routes>
    </>
  );
}

export default App
