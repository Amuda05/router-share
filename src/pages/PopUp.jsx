import React from 'react'

const PopUp = (cancel) => {
  return (
    <div className='popup-box'>
<div className="box">
    <span className='close-icon' onClick={cancel.handleClose}>x</span>
    
    <div className="texts">
    <span className='lore'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque ducimus qui </span>
    <span className='avif'><img src="/src/media/cookiesimg.avif" alt="" /></span>
    </div>
</div>

    </div>
  )
}

export default PopUp