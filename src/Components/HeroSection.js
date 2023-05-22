import React from "react";
import "../Component_StyleSheet/herosection.css";
import HandShakingImage from "../Assets/HeroSecAnimHand.png";

const HeroSection = () => {
  return (
    <div className="herosection">
      <div className="left">
        <h2 className="HleftRow1" data-aos="fade-right" data-aos-easing="ease-in" data-aos-duration="1500">
          <span>Hi There!</span>
          <img className="shakingAnimation" src={HandShakingImage} alt="Hii" />
        </h2>
        <h2 className="HleftRow2" data-aos="fade-left" data-aos-easing="ease-in" data-aos-duration="1500">
          I'M <b>CHANDAN KR SINGH</b>
        </h2>
        <h2 className="HleftRow3" data-aos="fade-up" data-aos-easing="ease-in" data-aos-duration="1500">Front-end Developer</h2>
      </div>
      <div className="right" data-aos="fade-down-left" data-aos-easing="ease-in" data-aos-duration="1500">
        <img
          className="rigthImage"
          src="https://soumyajit.vercel.app/static/media/home-main.541f8179af8209ce03ccf2178fe62dbf.svg
"
          alt="WorkingSvg"
        />
      </div>
    </div>
  );
};

export default HeroSection;
