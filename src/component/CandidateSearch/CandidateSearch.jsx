import React from 'react'
import './CandidateSearch.css'
import frame1 from '../../assets/Screenshot 2024-08-03 at 5.55.34 PM 1.png';
import frame2 from '../../assets/Screenshot 2024-08-03 at 6.02.27 PM 1.png';
import frame3 from '../../assets/Screenshot 2024-08-03 at 6.04.27 PM 1.png';
import frame4 from '../../assets/Screenshot 2024-08-03 at 6.05.29 PM 1.png';
import logo from '../../assets/Subtract (1).png';
import top from '../../assets/Rectangle 39693 (1).png';
function CandidateSearch() {
  return (
    <div className='candidateContainer'>

        <div className='grid-candidate-container'>
            <div className='whychoosec'>
              <h6>TECH SPACE RECRUITER</h6>
              <h4>Why Choose Us for</h4>
              <h3>Your Candidate Search?</h3>
              <p>Each and every recruiter understands the complexities, costs, and valuable time consumed in the pursuit of securing highly qualified candidates. However, what sets us apart is our unwavering commitment to revolutionizing the recruitment process.</p>
            </div>
            
            <div className='frame1'>
              <img src={frame1} alt='' />
            </div>
            
            <div className='frame2'>
              <img src={frame2} alt='' />
            </div>
            
            <div className='pre-qualified'>
            <span className='dot'></span>
              <h4>Pre-qualified candidates only</h4>
              <span className="arrow"></span>
              <p>Having pre-qualified candidates </p><p> ensures you can focus your efforts </p><p>on candidates who have already </p><p>been vetted, saving time and </p><p>resources while increasing the </p><p>likelihood of finding the right fit for</p><p> the role.</p>
            </div>
            
            <div className='active-job'>
              <h4>Only active job seekers</h4>
              
              <div className='vertical'></div>
              <span className="arrow"></span>
              <span className='dot'></span>
              <p>We grant recruiters exclusive access to a pool of active job seekers, ensuring a streamlined hiring process by connecting them directly with candidates actively seeking new opportunities.</p>
            </div>
            
            <div className='frame3'>
              <img src={frame3} alt='' />
            </div>
            
            <div className='connection1'>
              <h4>Pay per connection, not per hire</h4>
              <span className="arrow"></span>
              <span className='dot'></span>
              <p>Cost-effective approach in</p><p> recruitment which allows to to pay </p><p>small amount for being in touch with</p><p> a desired candidate instead of</p><p> paying big amount for hiring. For less</p><p> money you get nigger variety.</p>
              </div>
            
            <div className='frame4'>
              <img src={frame4} alt='' />
            </div>
            
            <div className='connection2'>
              <h4>Pay per connection, not per hire</h4>
              <span className="arrow"></span>
              <span className='dot'></span>
              <p>Cost-effective approach in</p><p> recruitment which allows to to pay </p><p>small amount for being in touch with</p><p> a desired candidate instead of</p><p> paying big amount for hiring. For less</p><p> money you get nigger variety.</p>
            </div>
            
        </div>
        <div className='biglogo'>
          <img src={logo} alt=''/>
        </div>
        <img src={top} alt=''/>
    </div>
  )
}

export default CandidateSearch
