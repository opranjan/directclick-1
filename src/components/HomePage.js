import React , {useEffect} from "react";
import "./HomePage.css";
import banner1 from "../images/banner1.jpg";
import Aos from "aos";
import "aos/dist/aos.css" ;


function HomePage() {
useEffect(() => {
  Aos.init({duration:2000});
}, [])

  return (
    <>
      <div>
        <div className="homebannerContainer">
          <div className="bannertext">
          <div className="line">
            <p id='welcomebox'> WELCOME TO WWW.DIRECTCLICK.IN</p>
            </div>
           
            <div className="upbubblesolid"></div>
            <div className="sloganspandiv">
              <h2 id="sloganspan">
                Reliable Services & Solutions for satisfying Customers
              </h2>
            </div>
            <p>
              Direct Click Technology is being the one-stop solution, provides
              the most effective and efficient Digital Marketing and Software
              Management Services.
            </p>
          </div>
          <div  className="bannerImage">
            <img data-aos="fade-up" className="banner1" src={banner1} alt="Direct Click" />
            {/* <img className='banner2' src={banner5} alt="Direct Click" /> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;








// {/* <section id="welcomebox">
// <div class="content">
//   <h2>welcome to www.directclick.in</h2>
//   <h2>welcome to www.directclick.in</h2>
// </div>
// </section> */}
