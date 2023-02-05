import "./HowItWorks.css";
import searchImg from "./resources/search.png";
import signUpImg from "./resources/signUp.png";
import createProfileImg from "./resources/createProfile.png";

function HowItWorks() {
  return (
    <section className="how-it-works">
      <h1 className="header-howitworks">How it works</h1>
      <section className="content-howitworks">
        <div className="content-frame">
          <img src={signUpImg} alt="Sign Up" />
          <h3>Sign up</h3>
          <p>
            You can login with your google/Facebook account or create a new
            acount with an email address
          </p>
        </div>
        <div className="content-frame">
          <img src={createProfileImg} alt="Create Profile" />
          <h3>Create a Profile</h3>
          <p>
            Upload photos, enter your interests-likes, update your biography
            etc.
          </p>
        </div>
        <div className="content-frame">
          <img src={searchImg} alt="searchImg" />
          <h3>Find new and old Friend</h3>
          <p>
            Make new and old connections through multiple channels on the
            platform
          </p>
        </div>
      </section>
    </section>
  );
}

export default HowItWorks;
