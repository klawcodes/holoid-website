import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './routes/Home'
import Generation from './routes/Generation'
import Member from './routes/Member'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/generation' element={<Generation />} />
        <Route path='/member' element={<Member />} />
      </Routes>
    </>
  );
}

export default App
