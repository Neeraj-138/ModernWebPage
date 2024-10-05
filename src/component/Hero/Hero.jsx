import React from 'react'
import './Hero.css'
import frame1 from '../../assets/Frame 1000003498.png';

import frame2 from '../../assets/man.png';
// C:\Users\Neeraj\Desktop\MyProjects\BookCRUD\frontend\src\assets\Group 481910.png
import frame3 from '../../assets/Group 481910.png';
function Hero() {
  return (
    <div className='hero'>
      <div className='left'>
        <div className='content'>
          <div className='big'>
            <p>FIND YOUR </p>
            <p>SUPER</p>
            <p>HEROS</p>
            
          </div>
          <div className='para' >
            <p>Experience unparalleled executive recruitment with</p> <p> our VIP service. We connect elite professionals with</p> <p> top companies, streamlining hiring for the perfect </p> <p> leadership fit.</p>
          </div>
        </div>
        <div className='blur'>
          <img src={frame1} alt=''/>
        </div>
        <div className='journey'>
          <p>START YOUR JOURNEY</p>
        </div>
      </div>

      <div className='right'>
        <div className='half'>
          <img src={frame2} alt=''/>
        </div>
        <div className='hash'>
          <img src={frame3} alt=''/>

        </div>        
      </div>

    </div>
  )
}

export default Hero
