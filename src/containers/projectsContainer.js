import React from 'react';
import { useViewport } from "../hooks/viewPort";
import housesBg from "../assets/housesBg.png";
import frontHouses from "../assets/frontendhouses.png";
import phoneMusic from "../assets/onlineShopCel.png";
import desktopMusic from "../assets/onlineShop.png";
import musicBg from "../assets/musicBg.png";
import seaSs from "../assets/seaSS.png";
import seaBg from "../assets/seaBg.png";
import HighlightProject from "../components/mainProject";
import Project from "../components/project";

const Projects = () => {
  const { width } = useViewport();
  const breakpoint = 560;

  const highlightProject = {
    name: "Rent Houses",
    info: "On this project I created a Front End that uses my API to manage renting places. The idea is to create a simplified version of AirBnb, where every user can register their own places for rent. It handle the user signing (utilizing tokens for validating the sessions), each user can create edit and delete their own places adding photos. And manage their favorites places.",
    short: "A Front End using my API to manage renting.",
    techs: ["React", "Redux", "RoR", "API"],
    images: [frontHouses], 
    background: housesBg,
    github: "https://github.com/Stricks1/houses-front-end",
    live: "https://gallant-ptolemy-3e1fa6.netlify.app/",
  }

  const listProjects = [
    {
      name: "Sea Treasures",
      info: "On this game, you are Bob the octopus, and you are in a quest to find a treasure in the 16-bit layout deep sea. You need to face some sea creatures in order to achieve your goal, and you can kill the creatures by shooting ink from our hero and interact with levers on the scenario to open paths. You have a limited time to complete the quest.",
      short: "A platform-shooter game build in Phaser3.",
      techs: ["JS", "Phaser3", "Game"],
      images: [seaSs],
      background: seaBg,
      github: "https://github.com/Stricks1/shooterGame",
      live: "https://phaserseagame.herokuapp.com/",
    },
    {
      name: "Chord Flow",
      info: "In this project, I create a music online shop with a 'main page with search option' and 'results' page. I used HTML & CSS techniques, such as semantic HTML, positioning of content with bootstrap, and flexbox among others. Also for learning purposes I used a framework - 'Flickity' to build a carousel.",
      short: "A Layout for a Music Shop using Bootstrap.",
      techs: ["HTML", "CSS", "Bootstrap"],
      images: [desktopMusic, phoneMusic],
      background: musicBg,
      github: "https://github.com/Stricks1/onlineShop",
      live: "https://rawcdn.githack.com/Stricks1/onlineShop/b1a7186910215306c6bcf25926abcad22bb4154a/index.html",
    },
    {
      name: "Rent Houses",
      info: "On this project I created a Front End that uses my API to manage renting places. The idea is to create a simplified version of AirBnb, where every user can register their own places for rent. It handle the user signing (utilizing tokens for validating the sessions), each user can create edit and delete their own places adding photos. And manage their favorites places.",
      short: "A Front End using my API to manage renting.",
      techs: ["React", "Redux", "RoR", "API"],
      images: [frontHouses], 
      background: housesBg,
      github: "https://github.com/Stricks1/houses-front-end",
      live: "https://gallant-ptolemy-3e1fa6.netlify.app/",
    }, 
    {
      name: "Sea Treasures",
      info: "On this game, you are Bob the octopus, and you are in a quest to find a treasure in the 16-bit layout deep sea. You need to face some sea creatures in order to achieve your goal, and you can kill the creatures by shooting ink from our hero and interact with levers on the scenario to open paths. You have a limited time to complete the quest.",
      short: "A platform-shooter game build in Phaser3.",
      techs: ["JS", "Phaser3", "Game"],
      images: [seaSs],
      background: seaBg,
      github: "https://github.com/Stricks1/shooterGame",
      live: "https://phaserseagame.herokuapp.com/",
    },
    {
      name: "Chord Flow",
      info: "In this project, I create a music online shop with a 'main page with search option' and 'results' page. I used HTML & CSS techniques, such as semantic HTML, positioning of content with bootstrap, and flexbox among others. Also for learning purposes I used a framework - 'Flickity' to build a carousel.",
      short: "A Layout for a Music Shop using Bootstrap.",
      techs: ["HTML", "CSS", "Bootstrap"],
      images: [desktopMusic, phoneMusic],
      background: musicBg,
      github: "https://github.com/Stricks1/onlineShop",
      live: "https://rawcdn.githack.com/Stricks1/onlineShop/b1a7186910215306c6bcf25926abcad22bb4154a/index.html",
    },
    {
      name: "Rent Houses",
      info: "On this project I created a Front End that uses my API to manage renting places. The idea is to create a simplified version of AirBnb, where every user can register their own places for rent. It handle the user signing (utilizing tokens for validating the sessions), each user can create edit and delete their own places adding photos. And manage their favorites places.",
      short: "A Front End using my API to manage renting.",
      techs: ["React", "Redux", "RoR", "API"],
      images: [frontHouses], 
      background: housesBg,
      github: "https://github.com/Stricks1/houses-front-end",
      live: "https://gallant-ptolemy-3e1fa6.netlify.app/",
    }
  ]

  if (width < breakpoint) {
    return (
      <div id="Portfolio" className="padding-top-base vw-90 m-auto">
        <div className="d-flex flex-column pb-4 blurrable">
          <h3 className="text-nowrap h3-project">My Recent Works</h3>
          <span className="line-separator mb-4"></span>
        </div>
        <HighlightProject project={highlightProject}/>
        <div className="cards-container mt-4 pt-4">
          {
            listProjects.map(project => (<Project key={project.name} project={project}  />))
          }
        </div>
      </div>
    );
  }

  return (
    <div id="Portfolio" className="padding-top-base vw-90 m-auto">
      <div className="d-flex pb-4 blurrable">
        <h3 className="text-nowrap h3-project">My Recent Works</h3>
        <span className="line-separator ml-3"></span>
      </div>
      <HighlightProject project={highlightProject}/>
      <div className="cards-container mt-4 pt-4">
        {
          listProjects.map(project => (<Project key={project.name} project={project} />))
        }
      </div>
    </div>
  );
};

export default Projects;