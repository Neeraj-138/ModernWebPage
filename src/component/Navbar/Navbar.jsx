import React from 'react'
import './navbar.css'
// C:\Users\Neeraj\Desktop\MyProjects\BookCRUD\frontend\src\assets\
import frame2 from '../../assets/Subtract.png';
function Navbar() {
  return (
    <div className='NavContainer'>
        <img src={frame2} alt=''/>
        <ul>

            <li>YourTeachSpace</li>
            <li>Services</li>
            <li>FAQ</li>
            <li><button>Sign Up</button></li>
        </ul>
    </div>
  )
}

export default Navbar
