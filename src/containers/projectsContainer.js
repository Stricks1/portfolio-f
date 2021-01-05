import React from 'react';
import { useViewport } from '../hooks/viewPort';
import housesBg from '../assets/housesBg.png';
import frontHouses from '../assets/frontendhouses.png';
import phoneMusic from '../assets/onlineShopCel.png';
import desktopMusic from '../assets/onlineShop.png';
import musicBg from '../assets/musicBg.png';
import seaSs from '../assets/seaSS.png';
import seaBg from '../assets/seaBg.png';
import phoneReact from '../assets/reactPhone.png';
import desktopReact from '../assets/reactSs.png';
import reactBg from '../assets/reactBg.png';
import phoneTicTacToe from '../assets/ticTacCel.png';
import desktopTicTacToe from '../assets/ticTacDesk.png';
import ticTacToeBg from '../assets/tictacBg.png';
import capTwitterFull from '../assets/capTwitterFull.png';
import twitterBg from '../assets/twitterBg.png';
import linterImg from '../assets/linterRuby.png';
import HighlightProject from '../components/mainProject';
import Project from '../components/project';

const Projects = () => {
  const { width } = useViewport();
  const breakpoint = 560;

  const highlightProject = {
    name: 'Rent Houses',
    info: 'For this project, I created the front-end of a site that uses my API to manage rentals. The idea is to create a simplified version of AirBnb, where every user can register their own places for rent. The site utilizes tokens to validate the sessions, and each user can create, edit, and delete their own places. Users can also add photos and manage their favorites places.',
    short: 'A Front End using my API to manage renting.',
    techs: ['React', 'Redux', 'Ruby on Rails', 'API'],
    images: [frontHouses],
    background: housesBg,
    github: 'https://github.com/Stricks1/houses-front-end',
    live: 'https://gallant-ptolemy-3e1fa6.netlify.app/',
    horizontal: false,
  };

  const listProjects = [
    {
      name: 'Sea Treasures',
      info: 'In this desktop browser game, designed with a 16-bit layout, you are Bob the octopus, and you are on a quest to find treasure in the deep sea. You need to face some sea creatures in order to achieve your goal, and you can kill the creatures by shooting ink and interacting with levers to open paths. You have a limited time to complete the quest.',
      short: 'A platform-shooter game build in Phaser3.',
      techs: ['JS', 'Phaser3', 'Game'],
      images: [seaSs],
      background: seaBg,
      github: 'https://github.com/Stricks1/shooterGame',
      live: 'https://phaserseagame.herokuapp.com/',
      horizontal: true,
    },
    {
      name: 'Pokemon',
      info: 'In this project, I created a Catalog of Pokemon. It has 2 pages: a main page listing all the Pokemon (which can be filtered by type and/or name), and a second page with details about each Pokemon, showing information and the evolution chain of that particular Pokemon.',
      short: 'A pokemon catalog using the Redux and API',
      techs: ['React', 'Redux', 'API'],
      images: [desktopReact, phoneReact],
      background: reactBg,
      github: 'https://github.com/Stricks1/reactReduxCapstone',
      live: 'https://reactpokecapstone.herokuapp.com/',
      horizontal: false,
    },
    {
      name: 'Twitter Redesign',
      info: "In this project, I redesigned Twitter to create a web app for sharing opinions about movies. I used Ruby on Rails, Model/View/Controller concepts, and Bootstrap to create an MVP for this app. Login, follow other users with the intuitive interface and 'retweet' opinions that resonate with yours!",
      short: "It's a redesigned Twitter-like app on RoR.",
      techs: ['Ruby on Rails', 'CSS'],
      images: [capTwitterFull],
      background: twitterBg,
      github: 'https://github.com/Stricks1/cap-twitter',
      live: 'https://bearded-toonie-16990.herokuapp.com/',
      horizontal: false,
    },
    {
      name: 'Tic-Tac-Toe',
      info: 'This Tic-Tac-Toe game has the possibility to play against a friend or an AI with 3 different levels of difficulty.',
      short: 'Tic-Tac-Toe game for browser with AI.',
      techs: ['JS', 'Game', 'AI'],
      images: [desktopTicTacToe, phoneTicTacToe],
      background: ticTacToeBg,
      github: 'https://github.com/Stricks1/JsTicTacToe/',
      live: 'https://raw.githack.com/Stricks1/JsTicTacToe/feature-ai/index.html',
      horizontal: false,
    },
    {
      name: 'Linter',
      info: 'The objective of this project was to create a linter for beginners, providing feedback about errors in a file. I created a linter to check .xml files and validate.',
      short: 'A linter to validate XML files locally.',
      techs: ['Ruby', 'Linter'],
      images: [linterImg],
      background: linterImg,
      github: 'https://github.com/Stricks1/capstone-linter',
      live: false,
      horizontal: false,
    },
    {
      name: 'Music shop',
      info: 'In this project, I created an online music shop with a main page (including a search option) and a results page. I used HTML & CSS techniques, such as semantic HTML, positioning of content with Bootstrap, and Flexbox. I also used the Flickity framework to build a carousel.',
      short: 'A Layout for a Music Shop using Bootstrap.',
      techs: ['HTML', 'CSS', 'Bootstrap'],
      images: [desktopMusic, phoneMusic],
      background: musicBg,
      github: 'https://github.com/Stricks1/onlineShop',
      live: 'https://rawcdn.githack.com/Stricks1/onlineShop/b1a7186910215306c6bcf25926abcad22bb4154a/index.html',
      horizontal: true,
    },
  ];

  if (width < breakpoint) {
    return (
      <div id="Portfolio" className="padding-top-base vw-90 m-auto">
        <div className="d-flex flex-column pb-4 blurrable">
          <h3 className="text-nowrap h3-project">My Recent Works</h3>
          <span className="line-separator mb-4" />
        </div>
        <HighlightProject project={highlightProject} />
        <div className="cards-container mt-4 pt-4">
          {
            listProjects.map(project => (<Project key={project.name} project={project} />))
          }
        </div>
      </div>
    );
  }

  return (
    <div id="Portfolio" className="padding-top-base vw-90 m-auto">
      <div className="d-flex pb-4 blurrable">
        <h3 className="text-nowrap h3-project">My Recent Works</h3>
        <span className="line-separator ml-3" />
      </div>
      <HighlightProject project={highlightProject} />
      <div className="cards-container mt-4 pt-4">
        {
          listProjects.map(project => (<Project key={project.name} project={project} />))
        }
      </div>
    </div>
  );
};

export default Projects;
