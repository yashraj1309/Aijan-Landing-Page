import "./Download.css";
import upcomingFeaturesImg from "./resources/upComingFeaturesImg.png";
import GooglePlay from "./resources/Google Play.png";
import AppStore from "./resources/App Store.png";

// resources for mobile screens
import Games from "./resources/Game.svg";
import Champianship from "./resources/Champianship.svg";
import Counseling from "./resources/Counseling.svg";
import DiscussForum from "./resources/DiscussForum.svg";
import Marketplace from "./resources/Marketplace.svg";

function Download() {
  return (
    <>
      <div className="upcoming-features">
        {/* <h1>Upcoming Features</h1> */}
        <img src={upcomingFeaturesImg} alt="upcoming features" />
        {/* add small line rectangle below img */}
      </div>
      <div className="upcoming-features-mobile-screen">
        <h1 className="upcoming-features-mobile-header">Upcoming Features</h1>
        <div className="upcoming-features-container-mobile-imgs">
          <img src={Games} alt="games" />
          <img src={DiscussForum} alt="Discussion forum" />
          <img src={Counseling} alt="Counseling" />
          <img src={Champianship} alt="Chamianship" />
          <img src={Marketplace} alt="Marketplace" />
        </div>
      </div>
      <div className="downloadSection">
        <h1>Available on Playstore and Appstore</h1>
        <p>Download now:</p>
        <div className="download">
          <button>
            <img src={GooglePlay} alt="Google Play Button" />
          </button>
          <button>
            <img src={AppStore} alt="App Store Button" />
          </button>
        </div>
      </div>
    </>
  );
}

export default Download;
