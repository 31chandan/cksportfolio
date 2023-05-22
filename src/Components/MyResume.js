import React from "react";
import "../Component_StyleSheet/myresume.css";
import Resume from "../Assets/resume/Chandan_Res.pdf";
import ResumeImage from "../Assets/ChandanRes.jpg";

const MyResume = () => {
  return (
    <div className="myresume_container">
      <div className="download_btn">
        <button>
          <a href={Resume} download>
            <i className="fa-solid fa-cloud-arrow-down"></i> Download Resume
          </a>
        </button>
      </div>
      <div className="resumeImageConatiner">
        <img
          className="resumeImage"
          src={ResumeImage}
          alt="MyResumeImageFormate"
        />
      </div>
      <div className="download_btn">
        <button>
          <a href={Resume} download>
            <i className="fa-solid fa-cloud-arrow-down"></i> Download Resume
          </a>
        </button>
      </div>
    </div>
  );
};

export default MyResume;
