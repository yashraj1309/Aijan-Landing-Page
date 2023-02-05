import "./Footer.css";
import instagramIcon from "./resources/instagram.png";
import twitterIcon from "./resources/twitter.png";
import facebookIcon from "./resources/facebook.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="p">© 2023 AIJAN | All rights reserved</div>
      <div className="aijan-logo-footer">AIJAN</div>
      <div className="social-icons">
        <img src={facebookIcon} alt="facebook icon" />
        <img src={instagramIcon} alt="instagram icon" />
        <img src={twitterIcon} alt="twitter icon" />
      </div>
    </footer>
  );
}

export default Footer;
