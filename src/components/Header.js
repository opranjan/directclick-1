import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import logo from "../images/dlogo.png";

import { MdClose } from "react-icons/md";
// import { IconName } from "react-icons/bi";
import { FiMenu } from "react-icons/fi";



function Header() {
  const menuData = [
    {
      path: "/",
      name: "Home",
      iconall: <FaBars />,
    },
    {
      path: "/Website",
      name: "Website",
      iconall: <FaBars />,
    },
    {
      path: "/app",
      name: "Mobile  Application",
      iconall: <FaBars />,
    },
    {
      path: "/software",
      name: "Wordpress Devlopment",
      iconall: <FaBars />,
    },
    {
      path: "/about",
      name: "About Us",
      iconall: <FaBars />,
    },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const hide = () => setIsOpen(false);
  const show = () => setIsOpen(true);

  // window.onscroll = function() {scrollFunction()};

  // function scrollFunction() {
  //   if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
  //     document.getElementById("navbar").style.top = "-80px";
  //   } else {
  //     document.getElementById("navbar").style.top = "0px";
  //   }
  // }

  

  return (
    <>
      <nav id="navbar">
        <label className="logo">
          {" "}
          <img id="logoimg" src={logo} alt="LOGO" />
        </label>
        {/* <div className="bars">
      
            <FaBars onClick={toggle} className="barsbtn" />
            <span className={`menu ${isOpen ? 'cross' : 'hamburger'}`}></span>
          
            
        </div> */}



        <div onClick={toggle}>
          {isOpen ? (
            <MdClose className="menubtn" style={{ color: "#7b7b7b", width: "40px", height: "40px"}} />
          ) : (
            <FiMenu
              className="menubtn" style={{ color: "#7b7b7b", width: "40px", height: "40px" }}
            />
          )}
        </div>




        <div className="menu" style={{ left: isOpen ? "0" : "-100%" }}>
          {menuData.map((item) => (
            <NavLink to={item.path} key={item.name}>
              <div
                className="list_item"
                onClick={toggle}
                onBlur={hide}
                onFocus={show}
              >
                {item.name}
              </div>
            </NavLink>
          ))}
        </div>
      </nav>
    </>
  );
}

export default Header;
