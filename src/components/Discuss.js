import './Discuss.css';
import banner3 from '../images/banner3.jpg'
import Aos from "aos";
import "aos/dist/aos.css" ;
import React , {useEffect} from "react";





function Discuss(){

    useEffect(() => {
        Aos.init({duration:2000});
      }, [])


    return(
        <div>
        <h2 id='messagetitle'>DROP US A LINE</h2>
        <p></p>
        <div className="disucssClass">
        <div className="discussForm">
        <form id='discuss-form'>
            <span className='formspan'>Name</span>
            <input type="text"  placeholder='Name'/>
            <span className='formspan'>Email</span>
            <input type="text" placeholder='Email'/>
            <span className='formspan'>Mobile Number</span>
            <input type="text" name="" id="" placeholder='Mobile Number'/>
            <label for="services" className='formlabel'>Select Service</label>
            <select name="services" id="services">
                 <option value="" disabled selected>Select Service</option>
                 <option value="Web-dev">website devlopment</option>
                 <option value="app-dev">Mobile Application</option>
                 <option value="word-dev">Wordpress devlopment</option>
                 <option value="d-marketing">Digital Mareting</option>
                 <option value="hosting">Hosting</option>
                 <option value="c-writing">Content Writing</option>

           </select>
            <span className='formspan'>Message</span>
            <textarea rows="2" cols="50" name="comment" form="discuss-form" placeholder='Message'>
           
           </textarea>
           <a href="/">Send Message</a>
        </form>
       
        </div>
        <div className="discussImg">
        <img data-aos="fade-up" src={banner3} alt="" />
        </div>
        </div>
        </div>
    );
}

export default Discuss;