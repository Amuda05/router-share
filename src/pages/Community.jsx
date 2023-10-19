import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from './Component/NavBar'

const Community = () => {
  return (
    <>
    <NavBar/>
  <main>
    <section>
    <h3 className='wel'>welcome</h3>
    <div className="wrap">
      <h1 className='h1'>Connect, share and learn with 
        <br />
        your crew</h1>

        <p>Whether you’re new to investing or been around the block,
          <br />
          level up your money moves with Communities. Speak your
          <br />
          mind and ask those burning questions, in a safe space
          <br />
          where everybody’s welcome.
        </p>
        <div className="img">
          <img src="/src/media/newbies.png" alt="" />
        </div>
    </div>
    </section>
  </main>
    </>
  )
}

export default Community