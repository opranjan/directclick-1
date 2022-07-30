import React from "react";
import "./Websitecomponent.css";
import Parallexsection from "./Parallexsection";
import Discuss from "./Discuss";
import Header from "./Header";
import Footer from "./Footer";
import Pricing from "./Pricing";
import banner from "../images/banner.png";

function Websitecomponent() {
  return (
    <div>
      <Header />
      <Parallexsection
        heading="Website Devlopment"
        heading2="website"
        description="We develop and design website that enhance your online visibility"
      />

      <div className="webdiv">
        {/* <p className="webdivheading">We Provide Useful Services</p> */}



        <div id="websitefirstheadingContainer">
          <h2 className="aboutwho">We Provide Useful Services</h2>
          <div id="priceanimdiv">
            <div className="animdiv"></div>
          </div>
        </div>

        <div></div>
        <p className="webdivpara">
          In this competitive world, where users search for everything online,
          it is crucial to have your business online. Whether a small business
          or large, having a website makes it more authentic and informative for
          the visitors. Direct Click helps in developing your website that not
          only attracts the visitors and engages with them but also helps in
          generating leads for your business. Today, every organization build
          their website and design it in a way that attracts the readers and
          bide them to scroll through it. The website being the face of the
          business today is not just a need but a compulsion for all the
          company’s to let the audience know about their offerings and tap on
          them to avail their services. A unique and appealing presence on the
          internet is what makes the business run in today’s digital world.
        </p>
      </div>

      <div className="webtype">
        <p className="webtypeheading">What’s Your Type?</p>
        <div></div>
        <p className="webtypepara">
          Websites are being designed and developed in various ways and for
          multiple industries in today’s world. But what is your preference? Let
          us make it easier for you by telling you the two types of websites
          which user’s usually prefer for their business:
        </p>
      </div>

      {/* Statictype website code */}

      <div className="webstaticdiv">
        <div className="webstatic">
          <p className="webstaticheading">Static Website</p>

         


          <p className="webstaticpara">
            Having a static layout, these websites come with a specific number
            of pages. Having been created on HTML and CSS, these type of
            websites remains static and doesn’t allow the users to make any kind
            of changes. In case you wish to develop a website of three pages or
            less, the opting for a static website is surly a suitable option as
            it takes less time and effort as in the case of dynamic websites.
          </p>
        </div>
        <div className="webstaticimg">
          <img
            src="https://webazu.in/Assets/img/services-details/static3.png"
            alt=""
          />
        </div>
      </div>

      {/* Dynamic type website code */}

      <div className="webstaticdiv">
        <div className="webstaticimg">
          <img
            src="https://webazu.in/Assets/img/services-details/dynamic.png"
            alt=""
          />
        </div>

        <div className="webstatic">
          <p className="webstaticheading">Dynamic Website</p>

          

          <p className="webstaticpara">
            Having a static layout, these websites come with a specific number
            of pages. Having been created on HTML and CSS, these type of
            websites remains static and doesn’t allow the users to make any kind
            of changes. In case you wish to develop a website of three pages or
            less, the opting for a static website is surly a suitable option as
            it takes less time and effort as in the case of dynamic websites.
          </p>
        </div>
      </div>

      <div id="pricingheadingContainer">
        <h2>Our Pricing Plan</h2>
        <div id="priceanimdiv">
          <div className="animdiv"></div>
        </div>
      </div>

      <Pricing
        basicwdpricetitle="Basic Website Devlopment"
        basicwdprice="5999"
        businesswdpricetitle="Business Website Devlopment"
        businesswdprice="9999"
        newswdpricetitle="News Website Development"
        newswdprice="15999"
        ecommercewdpricetitle="Ecommerce Website Devlopment "
        ecommercewdprice="25000"
      />

      <Discuss />
      <Footer />
    </div>
  );
}

export default Websitecomponent;
