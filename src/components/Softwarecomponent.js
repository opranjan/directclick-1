import React from "react";
import Parallexsection from "./Parallexsection";
import Discuss from "./Discuss";
import Footer from "./Footer";
import Header from "./Header";
import "./Softwarecomponent.css";

function Softwarecomponent() {
  return (
    <div>
      <Header />

      <Parallexsection
        heading="Wordpress Devlopment"
        heading2="Wordpress Devlopment"
        description="We develop and design Wordpress website that enhance your online visibility"
      />

      <div className="masterContainer">
        <div className="wordpress">
          {/* <p className="webtypeheading">What’s Your Type?</p> */}
          <div></div>

          <div id="aboutwordpressheadingContainer">
            <h2 className="aboutwho">wordpress service</h2>
            <div id="priceanimdiv">
              <div className="animdiv"></div>
            </div>
          </div>

          <p className="webtypepara">
            Websites are being designed and developed in various ways and for
            multiple industries in today’s world. But what is your preference?
            Let us make it easier for you by telling you the two types of
            websites which user’s usually prefer for their business:
          </p>
        </div>

        {/* Statictype website code */}

        <div className="wordpressdiv">
          <div className="wordpressexpertise">
            <p className="wordpressheading">
              Direct CLick WordPress Expertise:
            </p>
            <p>
              Direct Click’s expertise in WordPress CMS development and
              WordPress plug-in management puts your brand at the forefront,
              establishing you as someone who is truly passionate about what
              they are doing. Our WordPress services include:
            </p>
            <ul>
              <li>Web App Devlopment</li>
              <li>Blog development</li>
              <li>CMS development</li>
              <li>Plug-in management</li>
            </ul>
          </div>
          <div className="wordpressexpertiseimg">
            <img
              src="https://www.intelegain.com/wp-content/uploads/2015/06/wordpress_serv.png"
              alt=""
            />
          </div>
        </div>

        <div className="wordpresssolutiondiv">
          <div className="wordpresssolutionimg">
            <img
              src="https://www.intelegain.com/wp-content/uploads/2015/06/wordpress_serv2.png"
              alt=""
            />
          </div>

          <div className="wordpresssolution">
            <p className="wordpresssolutionheading">
              WordPress Solutions @ Diretclick:
            </p>
            <p>
              Having a static layout, these websites come with a specific number
              of pages. Having been created on HTML and CSS, these type of
              websites remains static and doesn’t allow the users to make any
              kind of changes. In case you wish to develop a website of three
              pages or less, the opting for a static website is surly a suitable
              option as it takes less time and effort as in the case of dynamic
              websites.
            </p>

            <ul>
              <li>Customized WordPress development</li>
              <li>Creating Themes or Templates for WordPress Blogs</li>
              <li>Providing e-commerce solutions</li>
              <li>Customization with WordPress Plug-in Development</li>
              <li>Payment Gateway Integration</li>
            </ul>
          </div>
        </div>

        <div className="whydcdiv">
          <div className="why">
            <p className="whytitle">Why</p>

            <ul>
              <li>
                Certified WordPress developers, who work with you at every step
                to understand your exact requirements and ensure that the end
                product fits-in the same.
              </li>
              <li>
                Routine communication and quick turnaround time enables
                implementation of any last-minute changes before rolling out the
                final beta, and also allows you to address any unanswered
                queries.
              </li>
              <li>
                Ongoing support and maintenance for WordPress CMS development
                and WordPress plug-in management to avoid waiting time.
              </li>
              <li>
                Quality development without any downtime or inconvenience caused
                to you and your end-customers.
              </li>
            </ul>
          </div>
          <div className="whyimg">
            <img
              src="https://www.intelegain.com/wp-content/uploads/2015/06/wordpress_serv3.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <Discuss />
      <Footer />
    </div>
  );
}

export default Softwarecomponent;
