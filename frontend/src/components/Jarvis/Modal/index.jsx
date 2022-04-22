import PropTypes from "prop-types";

const MODAL_STYLES = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#918989",
  width: "45vw",
  height: "50vh",
  zIndex: 1000,
};
const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, .7)",
  zIndex: 1000,
};

function Modal({ open, onClose, children }) {
  if (!open) {
    return null;
  }

  return (
    <>
      <div style={OVERLAY_STYLES} />
      <div style={MODAL_STYLES}>
        <button onClick={onClose} type="button">
          Close Modal
        </button>
        {children}
        <div className="app">{}</div>
      </div>
    </>
  );
}
Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default Modal;
