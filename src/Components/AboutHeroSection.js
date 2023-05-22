import React from "react";
import "../Component_StyleSheet/AboutHeroSection.css";

const AboutHeroSection = () => {
  return (
    <div className="AboutHeroSection">
      <div className="left">
        <h2 className="AboHerSec_text" data-aos="fade-down" data-aos-easing="ease" data-aos-duration="1000">
          Know Who <span>I'M</span>
        </h2>
        <p className="AboHerSec_para" data-aos="fade-right" data-aos-easing="ease-in" data-aos-duration="1500" data-aos-delay="40">
          Hi Everyone, I am <span> Chandan Kumar Singh</span> from <span>West Bengal, India.</span> I am a Fresher in Front-end development field. I have completed the course of <span> Web Development </span>with <span> React-JS. </span> Now I am looking a job for a <span> position </span> of <span> React Front-end developer.</span>
        </p>
        <p className="AboHerSec_paraActivity" data-aos="fade-left" data-aos-easing="ease-in" data-aos-duration="2000" data-aos-delay="40">
          Apart from coding, some other activities that I love to do!
        </p>
        <ul className="otherActivitiesList" data-aos="fade-left" data-aos-easing="ease-in" data-aos-duration="3000" data-aos-delay="80">
          <li>
            <i className="fa-solid fa-shuffle"></i> Playing Games
          </li>
          <li>
            <i className="fa-solid fa-shuffle"></i> Graphic designing
          </li>
          <li>
            <i className="fa-solid fa-shuffle"></i> learn new things
          </li>
        </ul>
        <p className="AboHerSec_Quotes" data-aos="fade-up" data-aos-easing="ease-in" data-aos-duration="3000" data-aos-delay="100">
          "Strive to build things that make a difference!" <br /> --Chandan
        </p>
      </div>
      <div className="right" data-aos="zoom-in" data-aos-duration="2500">
        <img
          className="AboutHerSec_Image"
          src="https://soumyajit.vercel.app/static/media/about.aee0f771fbfc1e7b8fa8.png"
          alt="SVgImage"
        />
      </div>
    </div>
  );
};

export default AboutHeroSection;
