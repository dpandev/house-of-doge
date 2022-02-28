import React from 'react'

const LandingPage = () => {
  return (
    <div className='landing-page'>
      <div className='page-section' id='front-page'>
        <h2 className='section-heading'>{"The Original Crash Game"}</h2>
        <div className='site-logo'>
          <img src='/assets/images/dogeLogo.png' alt='' className='logo-img' />
          <h1 className='logo-text'>{"House of Doge"}</h1>
        </div>
        <h4 className='section-subheading'>{"Doge Gambling Since 2022"}</h4>
        <a href='/play' className='play-button'>{"Play Now"}</a>
        <div className='game-info'>
          <div className='item'>
            <p>{"Social & Real Time"}</p>
            <a href='/'>
              <img src='/assets/images/featured-image-1.png' alt='' />
            </a>
          </div>
          <div className='item'>
            <p>{"Provably Fair"}</p>
            <a href='/'>
              <img src='/assets/images/featured-image-2.png' alt='' />
            </a>
          </div>
          <div className='item'>
            <p>{"Be the Bankroll"}</p>
            <a href='/'>
              <img src='/assets/images/featured-image-3.png' alt='' />
            </a>
          </div>
        </div>
        <div className='bank-info'>
          <div className='item'>
            <p>{"House Edge"}</p>
            <p>{"1%"}</p>
          </div>
          <div className='item'>
            <p>{"Wagered"}</p>
            <p>{"> Ɖ2,000,000"}</p>
          </div>
          <div className='item'>
            <p>{"Bankroll"}</p>
            <p>{"> Ɖ1,500"}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage