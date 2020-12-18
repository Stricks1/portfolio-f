import React, { useState, useEffect }  from 'react';
import { useViewport } from "../hooks/viewPort";
import { Modal } from "./modal";

const Project = ({ project }) => {
  const { width } = useViewport();
  const breakpoint = 560;
  const [show, setShow] = useState(false);

  const showModal = () => {
    const blur = document.getElementsByClassName("blurrable");
    let i;
    for (i = 0; i < blur.length; i++) {
      blur[i].classList.add("blur");
    } 
    setShow(true);
  };

  const hideModal = () => {
    const unblur = document.getElementsByClassName("blurrable");
    let i;
    for (i = 0; i < unblur.length; i++) {
        unblur[i].classList.remove("blur");
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
      <div className="project-card" style={{ backgroundImage: `url(${project.background})` }}>
        {project.name}
      </div>
    );
  }

  return (
    <div className="project-wrapper">
      <div className="project-card justify-content-end">
        <h3>{project.name}</h3>
      </div>
      <img src={project.background} alt="imageProject" />
    </div>
  );
};

export default Project;