import "./HeroSection.css";
import sectionImg from "./resources/sectionImg.svg";
import GooglePlay from "./resources/Google Play.png";
import AppStore from "./resources/App Store.png";

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-section-content">
        <h1>Make connections and meet old & new friends</h1>
        <p>
          AIJAN bring social interaction, In-person meetup, information, videos,
          post and friends for an old age peoples.
        </p>
        <div className="hero-sections-buttons">
          <button className="hero-section-btn">
            <img src={GooglePlay} alt="Google Play Button" />
          </button>
          <button className="hero-section-btn">
            <img src={AppStore} alt="App Store Button" />
          </button>
        </div>
      </div>
      <div className="hero-section-img">
        <img src={sectionImg} alt="Aijan" />
      </div>
    </section>
  );
}

export default HeroSection;
