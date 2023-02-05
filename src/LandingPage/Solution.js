import "./Solution.css";
import solutionImg from "./resources/solution.png";
import careImg from "./resources/care.png";
import meetupsImg from "./resources/meetups.png";
import connectionImg from "./resources/connections.png";

function Solution() {
  return (
    <section className="solution">
      <h1 className="solution-header">Solution</h1>
      <div className="solution-container">
        <div className="solution-content">
          <div className="solution-content-part">
            <div className="solution-content-part-main">
              <img src={connectionImg} alt="connections" />
              <h3>Online Connection opportunities</h3>
            </div>
            <p>Members will be able to search and find old and new friends</p>
          </div>
          <div className="solution-content-part">
            <div className="solution-content-part-main">
              <img
                src={meetupsImg}
                alt="meetups"
                height={"67px"}
                width={"67px"}
              />
              <h3>In-person meetups and events</h3>
            </div>
            <p>
              Activities will be posted and advertised in member area to promote
              and ancourage in-person meetup.
            </p>
          </div>
          <div className="solution-content-part">
            <div className="solution-content-part-main">
              <img src={careImg} alt="care" />
              <h3>Relief for relatives living far away</h3>
            </div>
            <p>
              Relatives will be able to focus on their careers and job
              opportunities further away with the social burden relieved.
            </p>
          </div>
        </div>
        <div className="solution-img">
          <img src={solutionImg} alt="solutions" />
          {/* Add background rectangle in img(svgs) */}
        </div>
      </div>
    </section>
  );
}

export default Solution;
