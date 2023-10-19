import React from 'react'
import { Link } from 'react-router-dom'
import PopUp from './PopUp'

const Learn = () => {
  return (
    <>
    <main  className='main'>
      <section>
      <div className="container">
         <h1>Page Not Found</h1>
         <div className="tex">
          <p>Looks like you've followed a broken link or entered  <br /> a URL that doesn't exist on this site.</p>
         </div>
         <div className="an">
         <p><a href="#">Back to our site</a></p>
         </div>
         <hr />
         <div className="if">
          <p>
          If this is your site, and you weren't expecting a 404 for this path, please visit Netlify's <a href="#"><q> page not found support guide</q> for troubleshooting tips.</a>
          </p>
         </div>
      </div>
      </section>
    </main>
    {/* <PopUp/> */}
      </>
  )
}

export default Learn