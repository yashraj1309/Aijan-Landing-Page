import "./Toggle.css";
import React, { useState, useEffect } from "react";
import ToggleClose from "./resources/MenuClose.svg";

function Toggle() {
  const [show, setShow] = useState(true);

  const sideBarHandeler = () => {
    setShow(!show);
  };

  const aboutSideBarHandeler = () => {
    setShow(!show);
    window.scroll({
      top: 600,
      behavior: "smooth"
    });
  };

  const solutionSideBarHandeler = () => {
    setShow(!show);
    window.scroll({
      top: 1200,
      behavior: "smooth"
    });
  };

  useEffect(() => {}, [show]);
  return (
    <>
      {" "}
      {show && (
        <div className="toggle">
          <div className="toggle-close-img">
            <img src={ToggleClose} alt="close" onClick={sideBarHandeler} />
          </div>
          <div className="toggle-real">
            <div className="toggle-header">
              <div className="toggle-logo">AIJAN</div>
            </div>
            <div className="toggle-nav-links">
              <div onClick={sideBarHandeler}>Home</div>
              <div onClick={aboutSideBarHandeler}>About</div>
              <div onClick={solutionSideBarHandeler}>Solution</div>
            </div>
            <div className="toggle-footer">
              <button className="toggle-footer-signup">Sign Up</button>
              <button className="toggle-footer-login">Log in</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Toggle;
