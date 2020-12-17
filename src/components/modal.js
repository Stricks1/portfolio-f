import { useViewport } from "../hooks/viewPort";

export const Modal = ({ handleClose, show, project }) => {
  const { width } = useViewport();
  const breakpoint = 640;
  const showHideClassName = show ? "modal1 display-block" : "modal1 display-none";

  if (width < breakpoint) {
    return (
      <div className={showHideClassName}>
        <section className="modal-main-phone pt-1 font-size-small">
        <div className="d-flex flex-column">
          <div className="d-flex justify-content-between mx-4">
            <h2 className="modal-title">{project.name}</h2>
            <div onClick={handleClose} className="align-self-center">
              <i className="fas fa-times" />
            </div>
          </div>
          <div className="d-flex flex-wrap pt-2 mx-4">
            { project.techs.map(tech => (
                  <div className="tech-square modal-tech py-1 px-3 mr-2 mb-2" key={tech}>
                    {tech}
                  </div>
                )
              ) 
            }
          </div>
          <div className="d-flex flex-column">
            <div className="max-h-modal-small">
              { project.images.length === 1 && (
                <div className='d-flex justify-content-center max-img-height-small'>
                  <img className='h-100 my-2' src={project.images[0]} alt='test' />
                </div>
              )}
              { project.images.length === 2 && (
                <div className='d-flex justify-content-center max-img-height-small'>
                  <img className='img-desktop-phone mt-2' src={project.images[0]} alt='test' />
                  <img className='img-phone-small align-self-end' src={project.images[1]} alt='test' />
                </div>
              )}
            </div>
            <div className="m-4 d-flex flex-column justify-content-between info-modal-small">
              <p className="mb-2 modal-info">{project.info}</p>
              <div className="d-flex mb-4">
                <div className="text-center button-square py-1 px-3 mr-2 mb-2 font-weight-bold" onClick={() => window.open(project.live)}>
                  See Live &nbsp;&nbsp;
                  <i className="fas fa-external-link-alt"></i>
                </div>
                <div className="text-center button-square py-1 px-3 mr-2 mb-2 font-weight-bold" onClick={() => window.open(project.github)}>
                  See Source &nbsp;&nbsp;
                  <i className="fa fa-github" />
                </div>
              </div>
            </div>
          </div>
        </div>
        </section>
      </div>
    );
  }

  return (
    <div className={showHideClassName}>
      <section className="modal-main pt-4">
        <div className="d-flex flex-column">
          <div className="d-flex justify-content-between mx-4">
            <h2 className="modal-title">{project.name}</h2>
            <div onClick={handleClose} className="align-self-center">
              <i className="fas fa-times" />
            </div>
          </div>
          <div className="d-flex flex-wrap pt-2 mx-4">
            { project.techs.map(tech => (
                  <div className="tech-square py-1 px-3 mr-2 mb-2" key={tech}>
                    {tech}
                  </div>
                )
              ) 
            }
          </div>
          <div className="d-flex">
            <div className="w-55 max-h-modal">
              { project.images.length === 1 && (
                <div className='d-flex justify-content-center max-img-height'>
                  <img className='w-100 my-2' src={project.images[0]} alt='test' />
                </div>
              )}
              { project.images.length === 2 && (
                <div className='d-flex justify-content-center max-img-height'>
                  <img className='img-desktop my-2' src={project.images[0]} alt='test' />
                  <img className='img-phone my-2 align-self-end' src={project.images[1]} alt='test' />
                </div>
              )}
            </div>
            <div className="w-45 mr-4 d-flex flex-column justify-content-between my-4">
              <p className="mb-2 modal-info">{project.info}</p>
              <div className="d-flex mb-4">
                <div className="text-center button-square py-1 px-3 mr-2 mb-2 font-weight-bold" onClick={() => window.open(project.live)}>
                  See Live &nbsp;&nbsp;
                  <i className="fas fa-external-link-alt"></i>
                </div>
                <div className="text-center button-square py-1 px-3 mr-2 mb-2 font-weight-bold" onClick={() => window.open(project.github)}>
                  See Source &nbsp;&nbsp;
                  <i className="fa fa-github" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};