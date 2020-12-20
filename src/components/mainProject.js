/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-plusplus */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { useViewport } from '../hooks/viewPort';
import { Modal } from './modal';

const HighlightProject = ({ project }) => {
  const { width } = useViewport();
  const breakpoint = 560;
  const [show, setShow] = useState(false);

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
        <div className="d-flex flex-column blurrable">
          <div>
            { project.images.length === 1 && (
              <div className="d-flex justify-content-center">
                <img className="w-100 my-4" src={project.images[0]} alt="test" />
              </div>
            )}
            { project.images.length === 2 && (
              <div className="d-flex justify-content-center">
                <img className="img-desktop my-4" src={project.images[0]} alt="test" />
                <img className="img-phone my-4 align-self-end" src={project.images[1]} alt="test" />
              </div>
            )}
          </div>
          <div>
            <h3 className="mb-4">{project.name}</h3>
            <p className="mb-2">{project.info}</p>
            <div className="d-flex flex-wrap pt-2">
              { project.techs.map(tech => (
                <div className="tech-square py-1 px-3 mr-2 mb-2" key={tech}>
                  {tech}
                </div>
              ))}
            </div>
            <div className="d-flex">
              <div className="button-square py-1 px-3 mr-2 mb-2 font-weight-bold" onClick={showModal}>
                See Project
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Modal show={show} handleClose={hideModal} project={project} />
      <div className="d-flex mt-4 blurrable">
        <div className="w-55">
          { project.images.length === 1 && (
            <div className="d-flex justify-content-center">
              <img className="w-100 my-4" src={project.images[0]} alt="test" />
            </div>
          )}
          { project.images.length === 2 && (
            <div className="d-flex justify-content-center">
              <img className="img-desktop my-4" src={project.images[0]} alt="test" />
              <img className="img-phone my-4 align-self-end" src={project.images[1]} alt="test" />
            </div>
          )}
        </div>
        <div className="w-45 d-flex flex-column text-highlight">
          <h3 className="mb-4">{project.name}</h3>
          <p className="mb-2">{project.info}</p>
          <div className="d-flex flex-wrap pt-2">
            { project.techs.map(tech => (
              <div className="tech-square py-1 px-3 mr-2 mb-2" key={tech}>
                {tech}
              </div>
            ))}
          </div>
          <div className="d-flex">
            <div className="button-square py-1 px-3 mr-2 mb-2 font-weight-bold" onClick={showModal}>
              See Project
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HighlightProject;
