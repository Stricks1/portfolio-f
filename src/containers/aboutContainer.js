/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import { useViewport } from "../hooks/viewPort";
import AboutImage from "../assets/about.svg";

const About = () => {
  const { width } = useViewport();
  const breakpoint = 560;

  if (width < breakpoint) {
    return (
      <div className="d-flex flex-column padding-top-base h-600 header-container d-flex justify-content-center ">
        <div id="About" className="padding-top-base h-600 header-container d-flex justify-content-center bg-about-img-mobile blurrable" style={{ backgroundImage: `url(${AboutImage})` }}>  
          <div className="d-flex flex-column mx-4 align-self-center pb-4">
            <div className="align-self-center justify-self-end max-info-header">
              <h1>About me</h1>
              <p>Hello I’m a software developer! I can help you build a product , feature or website Look through some of my work and experience! If you like what you see and have a project you need coded, don’t hestiate to contact me.</p>
              <div className="d-flex">
                <div className="button-square py-1 px-3 mr-2 mb-2 font-weight-bold" onClick={() => window.open('https://docs.google.com/document/d/18XKdsjUNB2lycjNyZZL-U_fCFK1goj0bV22lHz1pSWs/export?format=pdf', '_blank')}>
                  Get My Resume
                </div>
              </div>
            </div>
          </div>
        </div>
        <span class="line-separator-white mb-4"></span>
      </div>
    );
  }

  return (
    <div id="About" className="padding-top-base header-container blurrable">
      <div className="d-flex flex-column">
        <div className="d-flex justify-content-between pb-4">
          <div className="align-self-center justify-self-end max-info-header about-left-desktop">
            <h1>About me</h1>
            <p>Hello I’m a software developer! I can help you build a product , feature or website Look through some of my work and experience! If you like what you see and have a project you need coded, don’t hestiate to contact me.</p>
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
        <span class="line-separator-white mb-4 vw-90"></span>
      </div>
    </div>
  );
};

export default About;