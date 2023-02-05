import React, { useRef, useState } from "react";
import "./NavigationBar.css";
import MenuIcon from "./resources/MenuIcon.svg";
import Download from "./Download";
import HeroSection from "./HeroSection";
import HowItWorks from "./HowItWorks";
import OurMission from "./OurMission";
import Solution from "./Solution";
import Footer from "./Footer";
import Toggle from "./Toggle";

function NavigationBar() {
  const about = useRef(null);
  const solution = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth"
    });
  };

  const [show, setShow] = useState(false);

  const sideBarHandeler = () => {
    setShow(!show);
  };

  return (
    <>
      <nav className="navbar">
        <div className="container">
          <div className="logo-links">
            <div className="menu-btn">
              <img src={MenuIcon} alt="menuIcon" onClick={sideBarHandeler} />
            </div>
            <div className="aijan-logo">AIJAN</div>
            <div className="nav-links">
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li className="a-nav" onClick={() => scrollToSection(about)}>
                  About
                </li>
                <li className="a-nav" onClick={() => scrollToSection(solution)}>
                  Solution
                </li>
              </ul>
            </div>
          </div>
          <div className="buttons">
            <button className="sign-up">Sign Up</button>
            <button className="login">Log In</button>
          </div>
        </div>
      </nav>
      {show && <Toggle />}
      <HeroSection />
      <div ref={about}>
        <OurMission />
      </div>
      <div ref={solution}>
        <Solution />
      </div>
      <HowItWorks />
      <Download />
      <Footer />
    </>
  );
}

export default NavigationBar;
