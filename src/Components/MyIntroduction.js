import React from "react";
import MyPicture from "../Assets/MyPicture.png";
import Tilt from "react-parallax-tilt";
import "../Component_StyleSheet/myIntroduction.css";

const MyIntroduction = () => {
  return (
    <div className="introduction_container">
      <div className="left" data-aos="fade-left">
        <h2 className="introduction_title">
          LET ME <span>INTRODUCE</span> MYSELF
        </h2>
        <p className="introduction_para">
          I fell in love with programming and I have at least learnt something,
          I think… 🤷‍♂️
        </p>
        <p className="introduction_para">
          I am fluent in classics like <span>HTML, CSS, Javascript and React.js</span>
        </p>
        <p className="introduction_para">
          My field of Interest's are building new type of <span> Websites</span> with add some <span>features</span> on it.
        </p>
        <p className="introduction_para">
          Whenever possible, I also apply my passion for developing projects
          with <span>Modern Javascript Library</span> like <span>React.js and Next.js</span>
        </p>
      </div>
      <div className="right" data-aos="fade-right">
        <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10}>
          <img className="MyImage" src={MyPicture} alt="MyImage" />
        </Tilt>
      </div>
    </div>
  );
};

export default MyIntroduction;
