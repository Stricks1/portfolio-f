import React from 'react';
import { useViewport } from "../hooks/viewPort";
import HeaderImage from "../assets/header.svg";

const Header = () => {
  const { width } = useViewport();
  const breakpoint = 560;

  if (width < breakpoint) {
    return (
      <div className="padding-top-base vh-100 header-container">
        MOBILE VERSION
      </div>
    );
  }

  return (
    <div className="padding-top-base header-container-height header-container">
      <div className="d-flex justify-content-between">
        <div>
          <ul className="list-unstyled list-group">
            <li>
              <a href="https://github.com/Stricks1/" target="_blank" title="Gabriel GitHub" className="grey-color">
                <i class="fa fa-github" />
              </a>
            </li>
          </ul>
        </div>
        <div>

        </div>
        <div>
          <img src={HeaderImage} alt="Header" />
        </div>
      </div>
    </div>
  );
};

export default Header;