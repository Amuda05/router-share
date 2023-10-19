import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from './Component/NavBar'

const Home = () => {
  return (
    <>
      <NavBar/>
      <main>
      <div className='main'>
      <div className='text'>
        <h1 className='blu'>Invest. Learn.  Grow.
      </h1>

        <div className="imgs">
        <img src="/src/media/investing.avif" alt="" className='mar' />
      </div>
      
      </div>
      <span className='spam'>
      Invest in over 1,000 stocks, learn from current investors and 
        <br />
        grow your market knowledge. All in one easy to use app.
        </span>
         <p className='as'>As with all investing, your capital will be at risk.</p>

         <div className="qrcode">
        <div className="scan">
          <img src="/src/media/QR code.svg" alt="" />
          <p>Scan this QR code to 
            <br />
            download Shares</p>
        </div>
      </div>
      </div>
      </main>
    </>  )
}

export default Home