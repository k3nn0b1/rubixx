import { useState } from "react";
import "./styles.css";

export const Modal = ({ isOpen, handleClose, children }) => {
  const isOpenHideClassName = isOpen
    ? "overlay"
    : "overlay hide";

  return (
    <div className={isOpenHideClassName}>
      <section className="modal-container">
        {children}
        <button type="button" id="button-close" onClick={handleClose}>
          Close
        </button>
      </section>
    </div>
  );
};
