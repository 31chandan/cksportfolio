import React from "react";
import "../Component_StyleSheet/recentproject.css";
import ProjectCard from "./ProjectCard";
import WWR from "../Assets/video/WorldWeatherReport.mp4";
import Todoist from "../Assets/video/Todoist.mp4";
import Singh5Star from "../Assets/video/Singh5Star.mp4";

const RecentProject = () => {
  const ProjectDetails = [
    {
      id: 7,
      video: WWR,
      Title: "World Weather Report",
      description:
        "This is a weather report website were user can get the latest, hourly and upcomming weather reports of any Country or City in the World. This website is build with HTML, CSS and Javascript. User can open this website in any devices because it this website is fully Responsive. For more information please click the website Link below",
      GitLink: "https://github.com/31ChandanTech/WWR",
      WebsiteLink: "https://31chandantech.github.io/WWR/",
    },
    {
      id: 8,
      video: Todoist,
      Title: "TODOIST",
      description:
        "Todoist is same a To-do-list. User in there daily life needs to do a lot of task but all task didn't remember thats why this website helps the user to store the daily task and after completing the task user can remove the task easily.This was build in React and the data is saved or delete in Local Storage. For more information please click the website Link below",
      GitLink: "https://github.com/31ChandanTech/todoist",
      WebsiteLink: "https://31chandantech.github.io/todoist/",
    },
    {
      id: 9,
      video: Singh5Star,
      Title: "Singh 5'Star",
      description:
        "Restaurant website were user can see all the food items of Singh 5'Star Restaurant and book the Private Dinning or Caterring Services Online through this Website. This is a single page application build in React and OAUTH library also used in this application for Log-In and Log-Out fetures. Fully Responsive in all devices. For more information please click the website Link below",
      GitLink: "https://github.com/31ChandanTech/singh5starHome",
      WebsiteLink: "https://31chandantech.github.io/singh5starHome/",
    },
  ];

  return (
    <div className="recentproject_container">
      <h2 className="project_text" data-aos="fade-right" data-aos-easing="ease-in" data-aos-duration="1000">
        My Recent <span>Works</span>
      </h2>
      <p className="project_para" data-aos="fade-left" data-aos-easing="ease-in" data-aos-duration="1000">
        Here are a few projects I've worked on recently.
      </p>
      <ProjectCard Containts={ProjectDetails} />
    </div>
  );
};

export default RecentProject;
