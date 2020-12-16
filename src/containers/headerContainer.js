/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import { useViewport } from "../hooks/viewPort";
import HeaderImage from "../assets/header.svg";

const Header = () => {
  const { width } = useViewport();
  const breakpoint = 560;

  if (width < breakpoint) {
    return (
      <div className="padding-top-base h-600 header-container d-flex justify-content-center bg-header-img-mobile" style={{ backgroundImage: `url(${HeaderImage})` }}>
        <div className="d-flex flex-column mx-4 align-self-center">
          <div className="align-self-center justify-self-end max-info-header">
            <h1>Hey There. <br /> I'm Gabriel</h1>
            <h4>I'm a Software Developer</h4>
            <p>I can help you build a product, feature or website Look through some of my work and experience! If you like what you see and have a project you need coded, don't hesitate to contact me.</p>
          </div>
          <div className="align-self-center w-50">
            <ul className="list-unstyled list-group list-header d-flex flex-row justify-content-between w-100">
              <li>
                <a href="https://github.com/Stricks1/" target="_blank" title="GitHub" className="grey-color">
                  <i class="fa fa-github" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/gabriel-malheiros-silveira/" target="_blank" title="linkedin" className="grey-color">
                  <i class="fa fa-linkedin" />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/gabriel_stricks" target="_blank" title="twitter" className="grey-color">
                  <i class="fa fa-twitter" />
                </a>
              </li>
              <li>
                <a href="https://angel.co/u/gabriel-malheiros-silveira" target="_blank" title="angellist" className="grey-color">
                  <i class="fa fa-angellist" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="padding-top-base header-container-height header-container">
      <div className="d-flex justify-content-between">
        <div className="align-self-center">
          <ul className="list-unstyled list-group list-header ml-4">
            <li>
              <a href="https://github.com/Stricks1/" target="_blank" title="GitHub" className="grey-color">
                <i class="fa fa-github" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/gabriel-malheiros-silveira/" target="_blank" title="linkedin" className="grey-color">
                <i class="fa fa-linkedin" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/gabriel_stricks" target="_blank" title="twitter" className="grey-color">
                <i class="fa fa-twitter" />
              </a>
            </li>
            <li>
              <a href="https://angel.co/u/gabriel-malheiros-silveira" target="_blank" title="angellist" className="grey-color">
                <i class="fa fa-angellist" />
              </a>
            </li>
          </ul>
        </div>
        <div className="align-self-center justify-self-end max-info-header header-left-desktop">
          <h1>Hey There. <br /> I'm Gabriel</h1>
          <h4>I'm a Software Developer</h4>
          <p>I can help you build a product, feature or website Look through some of my work and experience! If you like what you see and have a project you need coded, don't hesitate to contact me.</p>
        </div>
        <div>
          <div className="bg-header-img" style={{ backgroundImage: `url(${HeaderImage})` }} />
        </div>
      </div>
    </div>
  );
};

export default Header;