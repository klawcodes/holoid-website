import React from 'react'

import './Generation.css'

import bg from '../assets/bg.jpeg'

const Generation = () => {
  return (
    <div className='gen'>
      <img src={bg} alt='' id='g-image'/>
      <div className='gen-bg'>
        <div className='gen-list'>
          <div className='area15'>
            <hr />
            <h1>AREA 15</h1>
            <hr />
          </div>
          <div className='holoro'>
            <hr />
            <h1>HOLORO</h1>
            <hr />
          </div>
          <div className='holoh3ro'>
            <hr />
            <h1>HOLOH3RO</h1> 
            <hr /> 
          </div>
        </div> 
      </div>
    </div>
  )
}

export default Generation
