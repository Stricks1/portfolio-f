/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import { useViewport } from "../hooks/viewPort";
import AboutImage from "../assets/about.svg";
import Square45 from "../assets/square45.svg";
import Square from "../assets/square.svg";
import Circle from "../assets/circle.svg";

const About = () => {
  const { width } = useViewport();
  const breakpoint = 560;
  const Languages = [
    'Javascript',
    'Ruby',
    'Html',
    'Css',
    'Cobol'
  ];
  const Frameworks = [
    'Bootstrap',
    'Ruby on Rails',
    'RSpec',
    'CapyBara',
    'React&Redux'    
  ];
  const Skills = [
    'Github',
    'Terminal',
    'Communication',
    'Remote Working'
  ];

  if (width < breakpoint) {
    return (
      <div id="About" className="padding-top-base header-container blurrable">
        <div className="d-flex flex-column padding-top-base h-600 header-container d-flex justify-content-center ">
          <div id="About" className="padding-top-base h-600 header-container d-flex justify-content-center bg-about-img-mobile blurrable" style={{ backgroundImage: `url(${AboutImage})` }}>  
            <div className="d-flex flex-column mx-4 align-self-center pb-4">
              <div className="align-self-center justify-self-end max-info-header">
                <h1>About me</h1>
                <p>Hi, I'm Gabriel, an enthusiastic problem solver. I'm from Brazil. I have a Bachelors in Information Systems and I studied Software Engineering at Microverse. I have more than 5 years experience in mainframe and web programming. I also have experience with other tools/languages listed below. If you'd like to get in contact about potential job opportunities, please reach out!</p>
                <div className="d-flex">
                  <div className="button-square py-1 px-3 mr-2 mb-2 font-weight-bold" onClick={() => window.open('https://docs.google.com/document/d/18XKdsjUNB2lycjNyZZL-U_fCFK1goj0bV22lHz1pSWs/export?format=pdf', '_blank')}>
                    Get My Resume
                  </div>
                </div>
              </div>
            </div>
          </div>
          <span className="line-separator-white mb-4"></span>
        </div>
        <div className="d-flex justify-content-around flex-column">
          <div className="d-flex flex-column align-items-center my-4">
            <div className="d-flex flex-nowrap mb-3 justify-content-center align-items-center">
              <img className="bulletLists45-phone" src={Square45} alt="square 45 bullet"/>
              <h2 className="pt-2 font-weight-bold">&nbsp;Language</h2>
            </div>
            <ul className="ul-about list-unstyled list-group font-list-about font-list-about-phone align-items-center d-flex flex-column flex-nowrap">
              { Languages.map(item => (
                  <li key={item}>
                      {item}
                  </li>
                ))
              }
            </ul>
          </div>
          <div className="d-flex flex-column align-items-center my-4">
            <div className="d-flex flex-nowrap mb-3 justify-content-center align-items-center">
              <img className="bulletLists-phone" src={Square} alt="square 45 bullet"/>
              <h2 className="pt-2 font-weight-bold">&nbsp;Frameworks</h2>
            </div>
            <ul className="ul-about list-unstyled list-group font-list-about font-list-about-phone align-items-center d-flex flex-column flex-nowrap">
              { Frameworks.map(item => (
                  <li key={item}>
                      {item}
                  </li>
                ))
              }
            </ul>
          </div>
          <div className="d-flex flex-column align-items-center my-4">
            <div className="d-flex flex-nowrap mb-3 justify-content-center align-items-center">
                <img className="bulletLists-phone" src={Circle} alt="square 45 bullet"/>
                <h2 className="pt-2 font-weight-bold">&nbsp;Skills</h2>
            </div>
            <ul className="ul-about list-unstyled list-group font-list-about font-list-about-phone align-items-center d-flex flex-column flex-nowrap">
              { Skills.map(item => (
                  <li key={item}>
                      {item}
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div id="About" className="padding-top-base header-container blurrable">
      <div className="d-flex flex-column">
        <div className="d-flex justify-content-between pb-4">
          <div className="align-self-center justify-self-end max-info-header about-left-desktop">
            <h1>About me</h1>
            <p>Hi, I'm Gabriel, an enthusiastic problem solver. I'm from Brazil. I have a Bachelors in Information Systems and I studied Software Engineering at Microverse. I have more than 5 years experience in mainframe and web programming. I also have experience with other tools/languages listed below. If you'd like to get in contact about potential job opportunities, please reach out!</p>
            <div className="d-flex">
              <div className="button-square py-1 px-3 mr-2 mb-2 font-weight-bold" onClick={() => window.open('https://docs.google.com/document/d/18XKdsjUNB2lycjNyZZL-U_fCFK1goj0bV22lHz1pSWs/export?format=pdf', '_blank')}>
                Get My Resume
              </div>
            </div>
          </div>
          <div>
            <div className="bg-about-img" style={{ backgroundImage: `url(${AboutImage})` }} />
          </div>
        </div>
        <span className="line-separator-white mb-4 vw-90"></span>
      </div>
      <div className="d-flex justify-content-around">
        <div className="d-flex flex-column">
          <div className="d-flex align-self-start flex-nowrap mb-3 justify-content-center align-items-center">
            <img className="bulletLists45" src={Square45} alt="square 45 bullet"/>
            <h5 className="pt-2 font-weight-bold">&nbsp;Language</h5>
          </div>
          <ul className="ul-about list-unstyled list-group font-list-about d-flex flex-column flex-nowrap">
            { Languages.map(item => (
                <li key={item}>
                    {item}
                </li>
              ))
            }
          </ul>
        </div>
        <div className="d-flex flex-column">
          <div className="d-flex align-self-start flex-nowrap mb-3 justify-content-center align-items-center">
            <img className="bulletLists" src={Square} alt="square 45 bullet"/>
            <h5 className="pt-2 font-weight-bold">&nbsp;Frameworks</h5>
          </div>
          <ul className="ul-about list-unstyled list-group font-list-about d-flex flex-column flex-nowrap">
            { Frameworks.map(item => (
                <li key={item}>
                    {item}
                </li>
              ))
            }
          </ul>
        </div>
        <div className="d-flex flex-column">
          <div className="d-flex align-self-start flex-nowrap mb-3 justify-content-center align-items-center">
              <img className="bulletLists" src={Circle} alt="square 45 bullet"/>
              <h5 className="pt-2 font-weight-bold">&nbsp;Skills</h5>
          </div>
          <ul className="ul-about list-unstyled list-group font-list-about d-flex flex-column flex-nowrap">
            { Skills.map(item => (
                <li key={item}>
                    {item}
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;