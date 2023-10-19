import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from './Component/NavBar'
const Purpose = () => {
  return (
     <>
       <NavBar/>
      <main>
      <div className='mai'>
      <h4 className='our'>our purpose</h4>
      <div className='text'>
        <h1 className='blu'>
        To build a world where together, we’re more than investors.
      </h1>

        <div className="imgs">
        <img src="/src/media/thebomb.avif" alt="" />
      </div>
      </div>
      <span className='spa'>
      We’re putting an end to investing alone or thinking “the <br /> financial market isn’t for me”. Shares brings connecting with <br /> friends and Investing together – in one app. Because we believe <br /> investing is for everyone, not just the top dogs.</span>
      </div>
      </main>
      </>
  )
}

export default Purpose