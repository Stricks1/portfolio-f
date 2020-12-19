/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import { useViewport } from "../hooks/viewPort";
import footerPhone from "../assets/footerPhone.svg";

const Footer = () => {
  const { width } = useViewport();
  const breakpoint = 560;

  if (width < breakpoint) {
    return (
      <div className="mt-2 border-footer d-flex flex-column justify-content-center align-items-center text-white blurrable">
        <ul className="my-2 list-unstyled footer-width list-group list-header d-flex flex-row justify-content-between">
             <li>
            <a href="https://github.com/Stricks1/" target="_blank" title="GitHub" className="grey-color">
              <i className="fa fa-github" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/gabriel-malheiros-silveira/" target="_blank" title="linkedin" className="grey-color">
              <i className="fa fa-linkedin" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/gabriel_stricks" target="_blank" title="twitter" className="grey-color">
              <i className="fa fa-twitter" />
            </a>
          </li>
          <li>
            <a href="https://angel.co/u/gabriel-malheiros-silveira" target="_blank" title="angellist" className="grey-color">
              <i className="fa fa-angellist" />
            </a>
          </li>
        </ul>
        <div className="mt-1 mb-3">
          <img src={footerPhone} alt="footer end"/>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-2 border-footer d-flex justify-content-center text-white blurrable">
      <ul className="my-2 list-unstyled footer-width list-group list-header d-flex flex-row justify-content-between">
        <li>
          <a href="https://github.com/Stricks1/" target="_blank" title="GitHub" className="grey-color">
            <i className="fa fa-github" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/gabriel-malheiros-silveira/" target="_blank" title="linkedin" className="grey-color">
            <i className="fa fa-linkedin" />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/gabriel_stricks" target="_blank" title="twitter" className="grey-color">
            <i className="fa fa-twitter" />
          </a>
        </li>
        <li>
          <a href="https://angel.co/u/gabriel-malheiros-silveira" target="_blank" title="angellist" className="grey-color">
            <i className="fa fa-angellist" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;