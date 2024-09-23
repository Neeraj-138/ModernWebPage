import React from 'react'
import './whychoose.css'

import frame1 from '../../assets/Group 481923.png';
import frame2 from '../../assets/Frame 1000003524.png';
import frame3 from '../../assets/Frame 1000003523.png';
import frame4 from '../../assets/Frame 1000003526.png';
import frame7 from '../../assets/Frame 1000003527.png';
import frame5 from '../../assets/Frame 1000003525.png';
import frame6 from '../../assets/Group 481928.png';
function WhyChoose() {
    
  return (
    <div> <div className='container'>
    <div className='whychoose'>
        <h2>Why Choose Us for <span>Your Executive Search?</span></h2>
        <p>We have streamlined and simplified the process to ensure ease and efficiency  </p><p>for our users, while keeping 100% privacy in you job-search.</p>
    </div>
    <div className="grid-container">
        <div className="grid-item1">

            <img src={frame1} alt='frame1'></img>
            <div>
                <h4>Time-Efficient Hiring Process</h4>
                <p>Accelerate your recruitment timeline by receiving pre-screened and highly suitable candidates, reducing the time and resources spent on sourcing and initial vetting.</p>
            </div>
        </div>
        <div className="grid-item2">
        <img src={frame2} alt='frame1'></img>
            <div>
                <h4>Access to Top Executive Talent</h4>
                <p>Gain direct access to a curated pool of highly qualified Directors, VPs, and C-level executives who may not be actively searching but are open to the right opportunity.</p>
            </div>  
           
        </div>
        <div class="grid-item3">
        <img src={frame3} alt='frame1'></img>
                <div>
                <h4>Global Talent Reach</h4>
                <p>Tap into a wider network of executive talent, potentially on a global scale, to find the best candidates regardless of geographical limitations.</p>
            </div>
        </div>
        <div className="grid-item4">
           
        <img src={frame4} alt='frame1'></img>
            <div>
                <h4>Confidential Search Capability</h4>
                <p>Conduct discreet searches for sensitive or high-profile positions without publicizing the vacancy, protecting company confidentiality and market position.</p>
            </div>
              
        </div>
        <div className="grid-item5">
            <img src={frame5} alt='frame1'></img>
            <div>
                
                <h4>Quality Candidate Matching</h4>
                <p>Benefit from candidates who have been carefully matched to your company's specific needs, culture, and strategic objectives, increasing the likelihood of a successful long-term hire.</p>
            </div>
        
        </div>
        <div class="grid-item6">
            <img src={frame6} alt='frame1'></img>
            <div>
                
                <h4>Post-Placement Support</h4>
                <p>Benefit from ongoing support after the placement to ensure seamless integration and onboarding of the new executive into your organization.</p>
            
            </div>
        </div>
        <div class="grid-item7">
            <img src={frame7} alt='frame1'></img>
            <div>
                
                <h4>Reduced Hiring Risk</h4>
                <p>Minimize the risk of a bad hire through our thorough vetting process, including background checks and comprehensive candidate assessments.</p>
        
            </div>
        </div>
    </div>
</div>
      
    </div>
  )
}

export default WhyChoose
