import React from 'react';
import { useViewport } from "../hooks/viewPort";
import frontHouses from "../assets/frontendhouses.png";
import phoneMusic from "../assets/onlineShopCel.png";
import desktopMusic from "../assets/onlineShop.png";
import HighlightProject from "../components/mainProject";

const Projects = () => {
  const { width } = useViewport();
  const breakpoint = 560;

  const highlightProject = {
    name: "Rent Houses",
    info: "On this project I created a Front End that uses my API to manage renting places. The idea is to create a simplified version of AirBnb, where every user can register their own places for rent. It handle the user signup and signing (utilizing tokens for validating the sessions), each user can create edit and delete their own places and add photos, save or remove places from their favorites and get a list of favorite places at each user.",
    techs: ["React", "Redux", "Ruby on Rails", "API"],
    images: [frontHouses], 
   /* images: [desktopMusic, phoneMusic], */
  }

  if (width < breakpoint) {
    return (
      <div id="Portfolio" className="padding-top-base vw-90 m-auto">
        <div className="d-flex flex-column pb-4">
          <h3 className="text-nowrap h3-project">My Recent Works</h3>
          <span className="line-separator mb-4"></span>
        </div>
        <HighlightProject project={highlightProject}/>
      </div>
    );
  }

  return (
    <div id="Portfolio" className="padding-top-base vw-90 m-auto">
      <div className="d-flex pb-4">
        <h3 className="text-nowrap h3-project">My Recent Works</h3>
        <span className="line-separator ml-3"></span>
      </div>
      <HighlightProject project={highlightProject}/>
    </div>
  );
};

export default Projects;