import React from 'react';
import { useViewport } from "../hooks/viewPort";

const Nav = () => {
  const { width } = useViewport();
  const breakpoint = 560;
  const toggleMobileMenu = () => {
    const navStart = document.getElementById('nav-links');
    const menuM = document.getElementById('dropdown-menu');
    menuM.lastChild.classList.toggle('d-none');
    navStart.firstChild.classList.toggle('invisible');
    menuM.firstChild.firstChild.classList.toggle('fa-bars');
    menuM.firstChild.firstChild.classList.toggle('fa-times');
    menuM.firstChild.firstChild.classList.toggle('nav-clicked');
    console.log(menuM.firstChild.firstChild);
  };

  if (width < breakpoint) {
    return (
      <div id="nav-links" className="px-3 py-2 w-100 d-flex justify-content-between text-white">
        <div className="mr-4 align-self-center nav-name">
          Gabriel
        </div>
        <div id="dropdown-menu">
          <div onClick={toggleMobileMenu}>
            <i className="fas fa-bars" />
          </div>

          <nav className="d-none nav-expanded">
            <ul className="list-unstyled list-group text-white">
              <li className="pl-2 m-auto item-drop">
                <a href="#Portfolio" onClick={toggleMobileMenu} className="text-white">
                  Portfolio
                </a>
              </li>
              <li className="pl-2 m-auto item-drop">
                <a href="#About" onClick={toggleMobileMenu} className="text-white">
                  About
                </a>
              </li>
              <li className="pl-2 m-auto item-drop">
                <a href="#Contact" onClick={toggleMobileMenu} className="text-white">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }

  return (
    <nav id="nav-links" className="py-2 w-100 d-flex justify-content-between text-white">
      <div className="ml-3 align-self-center nav-name">
        Gabriel
      </div>
      <ul className="d-flex list-nav justify-content-between list-fullscreen">
        <li className="pl-2">
          <a href="#Portfolio" className="text-white text-decoration-none">
            Portfolio
          </a>
        </li>
        <li className="pl-2">
          <a href="#About" className="text-white text-decoration-none">
            About
          </a>
        </li>
        <li className="pl-2">
          <a href="#Contact" className="text-white text-decoration-none">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;