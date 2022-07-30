
import Header from './Header';
import Footer from './Footer';
import Discuss from './Discuss';
import HomePage from './HomePage';
import Serviceslayout from './Serviceslayout';
import ProjectCompleted from './ProjectCompleted';
import Pricing from './Pricing';
import './Homecomponent.css'
import trophyicon from '../images/trophy.png';
import completedicon from '../images/completedicon.png';
import happyicon from '../images/happyicon.png';
import multiicon from '../images/multiservice.png';
import serviceicon from '../images/ux.png';
import wordpress from '../images/wordpress.png';
import mobileapp from '../images/mobile-app.png';
import digitalmarketing from '../images/digital-campaign.png';
import contentwriting from '../images/copywriting.png';
import webhosting from '../images/web-hosting.png';
import star from '../images/sparkler.png';
import shootingstar from '../images/shootingstar.png';

import Aos from "aos";
import "aos/dist/aos.css" ;
import React , {useEffect} from "react";






function Homecomponent(){



  useEffect(() => {
    Aos.init({duration:2000});
  }, [])
    return(

      
    <div className='appClass'>
    <div className='headerzindex'>
    <Header/>
    </div>
    <div className='topgap'>
    <HomePage/>
    </div>
    <div className='dcservices'>
    
    <h2 id='dcservicesh2'>Direct Click Services</h2>
    
    
  
    {/* <div className="circlebubblesolid"></div> */}
    <p>We always apply best practice in the software development process and use the very latest technology. We build up young and talented software engineers to a world class level. We warrant customer satisfaction to the best of our ability with reasonable cost and a excellent maintenance service provided by dedicated engineers.!</p>
    </div>

    <div className="circlebubble"></div>
    <div className="circlebubblesolid"></div>
    

    <Serviceslayout 


    wpicon={wordpress}
    wptitle="Wordpress Devlopment"
    wpdescription="WordPress Development Services for enterprises and organizations to improve their digital presence and skyrocket their sales." 

    
    websiteicon={serviceicon}
    websitetitle="Website Devlopment"
    websitedescription ="We specialize in custom website designing, web-development and web-maintainance, website redesignning" 


    mobileappicon={mobileapp}
    mobileapptitle="Mobile Application"
    mobileappdescription ="We offer a full cycle of application design, integration and management services. "


    dmarketingicon={digitalmarketing}
    dmarketingtitle="Digital Marketing" 
    dmarketingdescription ="Digital marketing services provide businesses of all sizes with an opportunity to market their brand 24/7 at a low cost "


    cwritingicon={contentwriting}
    cwritingtitle="Content Writing"
    cwritingdescription ="We Offer Professional & High Quality Content Writing Services For Wide Range Of Industries. " 



    hostingicon={webhosting}
    hostingtitle="Hosting"
    hostingdescription ="Host static & dynamic websites  with directclick hosting Click to Deploy or customized solutions." 

    />



    <div className='endserviceMastercontainer'>
      <div className="endserviceimg">
        {/* <img src={banner6} alt="" /> */}
        <img data-aos="fade-up" src="https://t4.ftcdn.net/jpg/03/08/69/75/240_F_308697506_9dsBYHXm9FwuW0qcEqimAEXUvzTwfzwe.jpg" alt="" />
      </div>
      <div className="endserviceparaContainer">
      <div className='endservicepara'>
      <h2 className='whatwedo'>What We do? <img src={star} className="shaperotate" alt="" /> </h2>
      <p> We help businesses in their digital transformation through our services such as Android and iOS mobile apps, website, custom apps, and e-commerce website development & Digital Marketing.</p>
      </div>

      <div  className='endservicepara'>
        <h2 className='whychoose'> <img src={shootingstar} className="shaperotate" alt="" />  Why Choose Us </h2>
        <p>What sets us apart from other web designing companies is that we have only one mantra of success "speed-all-out dedication to our customers' needs. Normally, other web designing companies are depending on templates (ready made designs) for making websites and they never consider SEO, because, it is easy to complete the work in this way. <br /><br />

But, we make each websites search engine optimized from start so that your website will never resemble another one. We only create content that is uniquely different from others in the market out there. We don't believe in templates to make your website, like most other website designing companies do for their clients. We tailor each website according to the specific needs of each client. We believe 'you' are unique and you deserve just that: a unique, outstanding product!</p>
      </div>
      </div>
    </div>
   



    <div className='projectCompleted'>
    <h2 className='noofproject_title'> We have Completed <strong> 50+ </strong>Project Sucessfully</h2>

    <div className="pclayoutContainer">
    <div className='pc_layout'>
    <ProjectCompleted actionicon={completedicon}  numberof="50"  actiontype="Project Completed"/>
    </div>
    <div className='pc_layout'>
    <ProjectCompleted actionicon={happyicon} numberof="40"  actiontype="Happy Client"/>
    </div>
    <div className='pc_layout'>
    <ProjectCompleted actionicon={multiicon}  numberof="20"  actiontype="Multi Services"/>
    </div>
    <div className='pc_layout'>
    <ProjectCompleted actionicon={trophyicon}  numberof="20"  actiontype="Winning Award"/>
    </div>
    </div>
    </div>



<div id='pricingheadingContainer'>
    <h2>Our Pricing Plan</h2>
    <div id="priceanimdiv">
      <div className='animdiv'></div>
    </div>
    </div>



    
    <Pricing 


     basicwdpricetitle="Basic Website Devlopment" basicwdprice="5999"
     businesswdpricetitle="Business Website Devlopment" businesswdprice="9999"
     newswdpricetitle="News Website Development" newswdprice="15999"
     ecommercewdpricetitle="Ecommerce Website Devlopment " ecommercewdprice="25000"


     />

    <Discuss/>
    <Footer/>
   </div>

 
        
    )
}

export default Homecomponent;