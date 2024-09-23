import React from 'react'
import frame2 from '../../assets/Subtract.png';
import './footer.css'
function Footer() {
  return (
    <div className='footer'>
        <div className='logo'>
            <div className='inner'>
                <img src={frame2} alt=''></img>
                <h3>techSpace</h3>
            </div>
            <div>
                <p>Your ultimate hiring solution for companies of all sizes and domains.</p>
            </div>
        </div>
        <div className='innerest'>
            <p><span>Privacy policy</span> © TechSpace 2024, All Rights Reserved</p>
        </div>
      
    </div>
  )
}

export default Footer
