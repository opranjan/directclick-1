import React from "react";
import Parallexsection from "./Parallexsection";
import Discuss from "./Discuss";
import Footer from "./Footer";
import Header from "./Header";
import "./Aboutuscomponent.css";
// import myimg from "../images/myimg.jpeg";
import premimg from "../images/premimage2.jpg";
import opimg from "../images/opimg.jpeg";

function Aboutuscomponent() {
  return (
    <div>
      <Header />
      <Parallexsection
        heading="About us"
        heading2="About us"
        description="Direct Click is a india's growing IT services Providing Company "
      />

      <div className="aboutMainContainer">
        <div className="Aboutimg">
          <img
            src="https://www.omega-sys.com/HomeAssets/img/bg-img/who-we-are.jpg"
            alt=""
          />
        </div>



       



        <div className="aboutpara">

        <div id="aboutwhoheadingContainer">
          <h2 className="aboutwho">Who We are ?</h2>
          <div id="priceanimdiv">
            <div className="animdiv"></div>
          </div>
        </div>

          <p>
            It was in January 2022 that a highly skilled group of engineers who
            shared the same sensibilities, got together and laid the seeds of
            Direct Click Software. Right from its inception the goal of the
            organization was clear: to provide state of the art web solutions to
            customers using only the best possible technology available. <br />
            <br /> Since then Direct Click has come a long way. We have a team
            of professional web developer, designers and experienced digital
            marketing people, who always deliver great personalized services as
            per business requirement. This includes ideas, services and design.
            We pride ourselves on retaining the very same ethics that went into
            building our esteemed organization and it is these very same ethics
            that make sure that we complete all our projects on time. <br />
            <br /> It is because we have a manic need for perfection, and this
            is what drives us towards working selflessly towards the goals of
            our customers without compromising on quality at all. We provide
            outstanding end to end connectivity between our offshore setup and
            clients. This serves to make video conferencing, voice chat and
            sharing a whiteboard look really very easy.
          </p>
        </div>
      </div>

      <div className="foundersection">
        <div className="founder">
          <div className="founderimgContainer">
            <div className="founderimg">
              <img src={opimg} alt="" />
            </div>
          </div>
          <div className="founderpara">
            <h4>Omprakash Ranjan</h4>
            <p>
              Omprakash Ranjan is the founder & CEO of Direct CLick Private
              Limited. He’s a self-starter and oversees the business
              development. Omprakash Ranjan is the best person to talk to if you
              want to know what’s happening in the tech world. He’s a dreamer
              and a doer. He loves the idea of getting to know clients and
              thinking about how to solve their challenges. He gets really
              excited about the prospect of crafting solutions for them!.
            </p>
          </div>
        </div>

        <div className="founder">
          <div className="founderimgContainer">
            <div className="founderimg">
              <img src={premimg} alt="" />
            </div>
          </div>
          <div className="founderpara">
            <h4>Premsunder Choudhary</h4>
            <p>
              Premsunder Choudhary is the Co-founder & COO. of Direct CLick
              Private Limited.Works from early in the mornings until late in the
              evenings. He takes many calls & many (tech) meets. Takes pride in
              delivering the best possible solutions to clients. His philosophy,
              Instead of doing 100 things at 10%, do 10 things at 100%.During
              his free time, plans next surprise vacation for his wife.
            </p>
          </div>
        </div>
      </div>

      <Discuss />
      <Footer />
    </div>
  );
}

export default Aboutuscomponent;
