import React from "react";

const ProjectCard = ({ Containts }) => {
  return (
    <div className="ProjectCards">
      {Containts.map((Element) => (
        <div className="card" key={Element.id} data-aos="fade-up" data-aos-easing="ease-in" data-aos-duration="1500">
          <video className="videos" autoPlay muted>
            <source src={Element.video} type="video/mp4" />
          </video>
          <h3 className="project_title">{Element.Title}</h3>
          <p className="project_detail">{Element.description}</p>
          <div className="project_links">
            <a href={Element.GitLink} className="projectlink" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-github"></i> GitHub
            </a>
            <a className="projectlink" href={Element.WebsiteLink} target="_blank" rel="noreferrer">
              Website Link
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectCard;
