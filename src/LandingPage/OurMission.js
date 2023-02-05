import "./OurMission.css";
import missionImg from "./resources/mission-img.png";

function OurMission() {
  return (
    <section className="ourMission">
      <h1 className="ourMissionHeader-forMobile">Our mission</h1>
      <div className="Mission-img">
        <img src={missionImg} alt="mission-img" />
      </div>
      <div className="mission-content">
        <h1>Our mission</h1>
        <p>
          A social app that will connect the more mature population thailand
          with their old and new friends through a communication platform. the
          ultimate goal is to provide a bigger social circle, in hope to bring
          more joy and interaction to a forgotten age demographic.
        </p>
      </div>
    </section>
  );
}

export default OurMission;
