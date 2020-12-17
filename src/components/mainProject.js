import React from 'react';
import { useViewport } from "../hooks/viewPort";

const HighlightProject = ({ project }) => {
  const { width } = useViewport();
  const breakpoint = 560;
  console.log(project);

  if (width < breakpoint) {
    return (
      <div className="d-flex flex-column">
        <div>
          { project.images.length === 1 && (
            <div className='d-flex justify-content-center'>
              <img className='w-100 my-4' src={project.images[0]} alt='test' />
            </div>
          )}
          { project.images.length === 2 && (
            <div className='d-flex justify-content-center'>
              <img className='img-desktop my-4' src={project.images[0]} alt='test' />
              <img className='img-phone my-4 align-self-end' src={project.images[1]} alt='test' />
            </div>
          )}
        </div>
        <div>
        </div>
      </div>
    );
  }

  return (
    <div className="d-flex mt-4">
      <div className="w-55">
        { project.images.length === 1 && (
          <div className='d-flex justify-content-center'>
            <img className='w-100 my-4' src={project.images[0]} alt='test' />
          </div>
        )}
        { project.images.length === 2 && (
          <div className='d-flex justify-content-center'>
            <img className='img-desktop my-4' src={project.images[0]} alt='test' />
            <img className='img-phone my-4 align-self-end' src={project.images[1]} alt='test' />
          </div>
        )}
      </div>
      <div className="w-45 d-flex flex-column text-highlight">
        <h3 className="mb-4">{project.name}</h3>
        <p className="mb-2">{project.info}</p>
        <div className="d-flex flex-wrap pt-2">
          { project.techs.map(tech => (
                <div className="tech-square py-1 px-3 mr-2 mb-2">
                  {tech}
                </div>
              )
            ) 
          }
        </div>
        <div className="d-flex">
          <div className="button-square py-1 px-3 mr-2 mb-2 font-weight-bold">
            See Project
          </div>
        </div>
      </div>
    </div>
  );
};

export default HighlightProject;