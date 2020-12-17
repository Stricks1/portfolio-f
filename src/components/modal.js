import { useViewport } from "../hooks/viewPort";

export const Modal = ({ handleClose, show, project }) => {
  const { width } = useViewport();
  const breakpoint = 560;
  const showHideClassName = show ? "modal1 display-block" : "modal1 display-none";

  if (width < breakpoint) {
    return (
      <div className={showHideClassName}>
        <section className="modal-main">
          {project.name} PHONE
          <button onClick={handleClose}>close</button>
        </section>
      </div>
    );
  }

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {project.name} ]DSKT
        <button onClick={handleClose}>close</button>
      </section>
    </div>
  );
};