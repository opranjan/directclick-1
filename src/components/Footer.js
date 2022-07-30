import logo2 from '../images/dc2logo.png';
import './Footer.css'
import { Link } from "react-router-dom";
import Gmailcomponent from "./Gmailcomponent";



function Footer(){
    return (
        <footer className='footerClass'>
            <div className="subscribeClass">
                   <img src={logo2} alt="Direct Click" />
                
                
                <form >
                <input type="text" placeholder='Enter Your Email'/>
                <a href="/">Subscribe Now</a>
                </form>
                
            </div>
            <div className="downfooter">
                <div className='footer-link'>
                <h3 className='footer-heading'>About Us</h3>
                <small className='aboutuspara'>
                We’re a  website and mobile app development agency based in Mumbai. Since 2022, we’ve been helping organisations reimagine their business by delivering thoughtful bespoke IT solutions. We bring passion to our job every single day and act more as a technology partner to our clients than an IT vendor.
                </small>
                </div>
                <div className='footer-link' >
               <h3 className='footer-heading'>Important Links</h3>
                <ul>

                    <li><a href="/about" className='footer_click'>About Us</a></li>
                    <li><a href="/" className='footer_click'>Our Works</a></li>
                    <li><a href="https://t.me/+RMPnbjnXywUzMDY1" className='footer_click'>Join our team</a></li>
                    <li><a href="/help"className='footer_click'>Help</a></li>
                    <li><a href="https://wa.me/919170021922" className='footer_click'>join in Whatsapp</a></li>
                    
                    
                </ul>
                </div>
                <div className='footer-link' >
                <h3 className='footer-heading'>Our service</h3>
                <ul>
                <li><a href="/software" className='footer_click'>Wordpress Devlopment</a></li>
                    <li><a href="/website" className='footer_click'>Website Devlopment</a></li>
                    <li><a href="/app" className='footer_click'>Mobile Application</a></li>
                    <li><a href="/" className='footer_click'>Content Writing</a></li>
                    <li><a href="/" className='footer_click'>Digital Marketing</a></li>
                </ul>
                </div>
                <div className='footer-link' id='footercontact' > 
                <h3 className='footer-heading'>Contacts </h3>
                <ul>
                    <li><p  className='footer_click_disable'>Phone <br /><a href="/" className='footercontact'>☏ +91-7905592431</a> </p></li> 
                    <li><p href="/" className='footer_click_disable'> Email <br /><a href="/"className='footercontactemail'> <Gmailcomponent className="footer_email" label="✉ directclick@gamil.com" mailto="mailto:directclick@gmail.com" /></a> </p></li>
                    <li><p  className='footer_click_disable'>Address <br /> <small className='footercontact'> ⊙ H-99 second floor sector-3, Airoli Navi Mumbai</small> </p></li>
                    </ul>
                </div>

               

            </div>

            <div className="copyright">
                    <div>Copyright © 2022 Direct Click</div> 
                    <div>Terms & Conditions | Privacy Policy</div> 
                </div>
        </footer>
    );
}

export default Footer;


