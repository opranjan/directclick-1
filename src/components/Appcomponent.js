import React from "react";
import Parallexsection from "./Parallexsection";
import Footer from "./Footer";
import Discuss from "./Discuss";
import Header from "./Header";
import Applayout from "./Applayout";
import "./Appcomponent.css";
import androidicon from "../images/android.png";
import nativeicon from "../images/application.png";
import mobileapp from "../images/mobileapp.svg";

function Appcomponent() {
  return (
    <div>
      <Header />
      <Parallexsection
        heading="Application Devlopment"
        heading2="Application Devlopment"
        description="We develop and design application that enhance your online visibility"
      />

      

      <div className="appgrandparentdiv">
        <div className="appparentdiv">


        <div id="aboutappheadingContainer">
        <h2 className="aboutwho"> Mobile App Services?</h2>
        <div id="priceanimdiv">
          <div className="animdiv"></div>
        </div>
      </div>
          <p className="appchildpara">
            Mobiles have become the survival kit for most of the people
            nowadays. As the screen on your palm grows shorter and shorter, we
            know what it means to have a mobile-driven world as most of the
            audience is mobile centric nowadays and that is the sole reason for
            growth of mobile applications widely. From small businesses,
            startups to enterprises the major growth factor is the
            implementation of mobile applications to serve customer needs and
            bestow better digital solutions. Mobile applications have marked
            their use among the customers. <br /> <br />
            Mobile application development is the process of developing mobile
            apps for mobile devices which are further used for personal digital
            assistance, enterprise digital assistance and mobile phones.
            Therefore, through our dedicated team of expert mobile app
            developers, we craft top-notch experiences for your target audience.
            We make sure that in this competitive environment, your application
            gets the recognition it deserves. <br />
            <br />
            Building the best mobile applications for your business whether it
            is a basic mobile apps or custom mobile apps or a high-end AI
            application, we are always in! We do Native mobile Apps using Swift
            or Android SDK and build affordable prototype using Hybrid platforms
            like Ionic framework.
          </p>
        </div>
        <div className="appchildimg">
          <img src={mobileapp} alt="" />
        </div>
      </div>

      <div className="appservice_layout">
        <div className="box">
          <div id="phoneicon">
            <img
              src="https://images.pexels.com/photos/1440722/pexels-photo-1440722.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
          </div>
        </div>
        <div className="box">
          <Applayout
            apptitle="Android Application"
            appdescription="Having a market share of whooping 86.6%, it is the first choice in the app world to test their business idea. In this vast ocean, we make sure your app is not an ordinary drop."
            serviceicon={androidicon}
          />
        </div>
        <div className="box">
          <Applayout
            apptitle="Native Application "
            appdescription="Unlike websites and web applications, native apps don’t run in the browser. You need to download them from platform specific app stores such as Google Play or Apple’s App Store."
            serviceicon={nativeicon}
          />
        </div>
      </div>

      <Discuss />
      <Footer />
    </div>
  );
}

export default Appcomponent;
