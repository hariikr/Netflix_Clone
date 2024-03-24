import React, { useEffect } from 'react'
import './Banner.css'
function banner() {
  useEffect(() => {

  },[])
  return (
    <div className='banner'>
      <div className='content'>
        <h1 className='title'>Movie Name</h1>
        <div className='banner_buttons'>
            <button className='button'>Play</button>
            <button className='button'>My list</button>

        </div>
        <h1 className='description'>Watch anywhere. Cancel anytime.Ready to watch? Enter your email to create or restart your membership.</h1>

      </div>
      <div className="fade_bottom"></div>

    </div>
  )
}

export default banner
