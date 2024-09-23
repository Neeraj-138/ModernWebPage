import React from 'react'
import './payment.css'

import upper from '../../assets/Rectangle 39694.png';
function Payment() {
  return (
    <div className='PaymentContainer'>
        <div className='upper'> 
            <img src={upper} alt='per'/> 
        </div>
        <div className='heading'>
            <p>Hire with the most Flexible payment</p>
            <p>system in the market</p>
            <div>
                <p>
                    We believe tech space should be accessible for all Startups and companies with flexible
                </p>
                <p> pricing. Pay as you connect and keep control of spending in your hands</p>
            </div>
        </div>
        <div className='card'>
            
            <div className='card-item1'>
                <div className='professional'>
                    <h2>Professional</h2>
                    <p>5 EAD/credit</p>
                </div>
                <hr/>
                <div>
                    <ul>
                        <li>All Basic Services</li>
                        <li>Unlimited Contacts</li>
                        <li>Unlimited Credits</li>
                        <li>Cancel Any time</li>
                        <li>...</li>
                    </ul>
                </div>
                <div className='start'>
                    <h4>Free</h4>
                    <button>Start Now </button>
                </div>
            </div>
            <div className='card-item2'>
                <div className='price'>
                    <h2>Unlimited</h2>
                    <p>Comming soon</p>
                </div>
                <hr/>
                <div  className='price-details'>
                    <ul>
                        <li>All Basic Services</li>
                        <li>Unlimited Contacts</li>
                        <li>Unlimited Credits</li>
                        <li>Cancel Any time</li>
                        <li>...</li>
                    </ul>
                
                    <ul>
                        <li>All Basic Services</li>
                        <li>Unlimited Contacts</li>
                        <li>Unlimited Credits</li>
                        <li>Cancel Any time</li>
                        <li>...</li>
                    </ul>
                    
                
                </div>
                <div className='interest'>
                    <h5>10000 EAD/month</h5>
                    <button>Share your interest</button>
                </div>
            </div>

        </div>
      
    </div>
  )
}

export default Payment
