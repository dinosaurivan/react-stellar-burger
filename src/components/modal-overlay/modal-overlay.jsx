// libraries
import PropTypes from "prop-types";

// styles 
import styles from "./modal-overlay.module.css";



function ModalOverlay({ isVisible, close, children }) {

  function handleOverlayClick(event) {
    if (event.target === event.currentTarget) {
      close();
    };
  };      

  return (
    <div 
      className={isVisible ? `${styles.overlay} ${styles.visible}` : styles.overlay} 
      onClick={handleOverlayClick}
    >
      {children}
    </div>
  );
};

ModalOverlay.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired
};

export default ModalOverlay;
