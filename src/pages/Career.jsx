import React from 'react'
 import { Link } from 'react-router-dom'
import NavBar from './Component/NavBar'
const Career = () => {
  return (
    <>
    <NavBar/>
     <main className='bgcolor'>
     <h4>
      careers
     </h4>
     <div className="wras">
      <h1>
      Ready to make investing <br /> social with us?
      </h1>
      <p>We’re on a mission to give every human fair access to the
        <br />
        stock market and the social connectedness and support to
        <br />
        build a strong financial future – in community.
      </p>
     </div>
     <div className="btn">
     <span className='btns'>See available roles</span>
     </div>
     <div className="img">
  <img src="/src/media/joincrew.png" alt="" />
</div>
     </main>
      </>
  )
}

export default Career