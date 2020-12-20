/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-plusplus */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { useViewport } from '../hooks/viewPort';
import { Modal } from './modal';

const Project = ({ project }) => {
  const { width } = useViewport();
  const breakpoint = 560;
  const [show, setShow] = useState(false);
  const [hover, setHover] = useState(false);

  const onHoverIn = () => {
    setHover(true);
  };

  const onHoverOut = () => {
    setHover(false);
  };

  const showModal = () => {
    const blur = document.getElementsByClassName('blurrable');
    let i;
    for (i = 0; i < blur.length; i++) {
      blur[i].classList.add('blur');
    }
    setShow(true);
  };

  const hideModal = () => {
    const unblur = document.getElementsByClassName('blurrable');
    let i;
    for (i = 0; i < unblur.length; i++) {
      unblur[i].classList.remove('blur');
    }
    setShow(false);
  };

  useEffect(() => {
    if (show) {
      showModal();
    }
  });

  if (width < breakpoint) {
    return (
      <>
        <Modal show={show} handleClose={hideModal} project={project} />
        <div className="project-wrapper mb-4 blurrable">
          <div className="project-card-phone justify-content-end" onMouseEnter={onHoverIn} onMouseLeave={onHoverOut}>
            <h3 className="ml-2">{project.name}</h3>
            <p className="ml-2">{project.short}</p>
            <div className="d-flex flex-wrap pt-2 ml-2">
              { project.techs.map(tech => (
                <div className="tech-square-2 py-1 px-3 mr-2 mb-2" key={tech}>
                  {tech}
                </div>
              ))}
            </div>
            <div className="button-square text-center py-1 px-3 font-weight-bold" onClick={showModal}>
              See Project
            </div>
          </div>
          <img className="img-phone-pj" src={project.background} alt="imageProject" />
        </div>
      </>
    );
  }

  return (
    <>
      <Modal show={show} handleClose={hideModal} project={project} />
      <div className="project-wrapper mr-4 mb-4 blurrable">
        <div className="project-card justify-content-end" onMouseEnter={onHoverIn} onMouseLeave={onHoverOut}>
          { !hover
            && (
            <>
              <h3 className="ml-2">{project.name}</h3>
              <p className="ml-2 project-p">{project.short}</p>
              <div className="d-flex flex-wrap pt-2 ml-2">
                { project.techs.map(tech => (
                  <div className="tech-square-2 py-1 px-3 mr-2 mb-2" key={tech}>
                    {tech}
                  </div>
                ))}
              </div>
            </>
            )}
          { hover
            && (
            <>
              <p className="ml-2 invisible project-p">{project.short}</p>
              <div className="d-flex flex-wrap pt-2 ml-2 invisible">
                { project.techs.map(tech => (
                  <div className="tech-square-2 py-1 px-3 mr-2 mb-2" key={tech}>
                    {tech}
                  </div>
                ))}
              </div>
              <div className="button-square text-center pt-1 pb-2 px-3 font-weight-bold" onClick={showModal}>
                See Project
              </div>
            </>
            )}
        </div>
        <img className={project.horizontal ? 'img-dsk-hor' : 'img-dsk'} src={project.background} alt="imageProject" />
      </div>
    </>
  );
};

export default Project;
