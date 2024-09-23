import React from 'react'
import './Company.css'
// C:\Users\Neeraj\Desktop\MyProjects\BookCRUD\frontend\src\assets\Object (2).png
// C:\Users\Neeraj\Desktop\MyProjects\BookCRUD\frontend\src\assets\Object (1).png
import frame1 from '../../assets/Object (1).png';
import frame2 from '../../assets/Object.png';
// C:\Users\Neeraj\Desktop\MyProjects\BookCRUD\frontend\src\assets\Object (3).png
import frame3 from '../../assets/Object (2).png';
import frame4 from '../../assets/Object (3).png';
import frame5 from '../../assets/Object (4).png';
function Company() {
  return (
    <div className='CompanyContainer'>
        <p>Collaborated to build a better future together</p>
        <div className='company'>
            <img src={frame1} alt='company'/>
            <img src={frame2} alt='company'/>
            <img src={frame3} alt='company'/>
            <img src={frame4} alt='company'/>
            <img src={frame5} alt='company'/>
           
        </div>
      
    </div>
  )
}

export default Company
