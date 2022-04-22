import PropTypes from "prop-types";
import SJarvis from "./style"

function Modal({ open, onClose, children }) {
  if (!open) {
    return null;
  }

  return (
    <SJarvis>
      <>
        <div className="overlay" />
        <div className="modal">
          {children}
        <div className="app">{}</div>
        <div className="border_button">
          <button onClick={onClose} type="button">
              Close card
          </button>
        </div>
        </div>
      </>
    </SJarvis>
  );
}
Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default Modal;
