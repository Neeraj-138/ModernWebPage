
import CandidateSearch from "./component/CandidateSearch/CandidateSearch";
import Company from "./component/company/Company";
import FAQ from "./component/Faq/FAQ";
import Footer from "./component/footer/Footer";
import Hero from "./component/Hero/Hero";
import Insites from "./component/Insites/Insites";
import Navbar from "./component/Navbar/Navbar";
import Payment from "./component/Payment/Payment";
import WhyChoose from "./component/whyChoose/WhyChoose";
import Second from "./page/page2/Second";
import "./style.css"

function App() {
  return (
    <div className='App'>
    {/* <Navbar/>
    <Hero/>
    <Company/>
    
    <WhyChoose/>
    
    <Insites/>
    <FAQ/>
    <Footer/> */}

    <Second/>
    </div>
    
  );
}

export default App;
