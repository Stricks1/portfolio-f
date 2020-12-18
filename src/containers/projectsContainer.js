import React from 'react';
import { useViewport } from "../hooks/viewPort";
import housesBg from "../assets/housesBg.png";
import frontHouses from "../assets/frontendhouses.png";
import phoneMusic from "../assets/onlineShopCel.png";
import desktopMusic from "../assets/onlineShop.png";
import musicBg from "../assets/musicBg.png";
import seaSs from "../assets/seaSS.png";
import seaBg from "../assets/seaBg.png";
import phoneReact from "../assets/reactPhone.png";
import desktopReact from "../assets/reactSs.png";
import reactBg from "../assets/reactBg.png";
import capTwitterFull from "../assets/capTwitterFull.png";
import twitterBg from "../assets/twitterBg.png";
import linterImg from "../assets/linterRuby.png";
import HighlightProject from "../components/mainProject";
import Project from "../components/project";

const Projects = () => {
  const { width } = useViewport();
  const breakpoint = 560;

  const highlightProject = {
    name: "Rent Houses",
    info: "On this project I created a Front End that uses my API to manage renting places. The idea is to create a simplified version of AirBnb, where every user can register their own places for rent. It handle the user signing (utilizing tokens for validating the sessions), each user can create edit and delete their own places adding photos. And manage their favorites places.",
    short: "A Front End using my API to manage renting.",
    techs: ["React", "Redux", "Ruby on Rails", "API"],
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
      name: "Pokemon Catalog",
      info: "On this project, I created a a Catalog of Pokemons, it have 2 pages, a main page listing all the pokemons (on this page you can filter by type and/or name). And a second page with details of each pokemon, showing some information and the evolution chain of that particular pokemon.",
      short: "A pokemon catalog using the Redux and API",
      techs: ["React", "Redux", "API"],
      images: [desktopReact, phoneReact],
      background: reactBg,
      github: "https://github.com/Stricks1/reactReduxCapstone",
      live: "https://reactpokecapstone.herokuapp.com/",
    },
    {
      name: "Twitter Redesign",
      info: "In this project, I redesigned a twitter to create opinions about movies. I used a lot of knowledge of Ruby on Rails, Model/View/Controller concepts, bootstrap among other front-end knowledge to create an MVP for this app. Login, follow other users with an intuitive interface and 'retweet' opinions that resonate with yours!",
      short: "It's a redesigned Twitter-like app on RoR.",
      techs: ["Ruby on Rails", "CSS"],
      images: [capTwitterFull],
      background: twitterBg,
      github: "https://github.com/Stricks1/cap-twitter",
      live: "https://bearded-toonie-16990.herokuapp.com/",
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
      name: "XML Linter",
      info: "In this project, the objective was to create a linter for beginners it provides feedback about errors in a file. I created a linter to check .xml files and validate:",
      short: "A linter to validate XML files locally.",
      techs: ["Ruby", "Linter"],
      images: [linterImg], 
      background: linterImg,
      github: "https://github.com/Stricks1/capstone-linter",
      live: false,
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