import React, { useState } from "react";
import PropTypes from "prop-types";
import CallbackModal from "../modals/CallbackModal";
import "./CallbackButton.css";

const CallbackButton = ({ text, className, buttonStyle }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button 
        onClick={openModal} 
        className={`callback-btn ${className || ""}`}
        style={buttonStyle} 
      >
        {text || "Заказать звонок"}
      </button>
      
      <CallbackModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

CallbackButton.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
  buttonStyle: PropTypes.object
};

export default CallbackButton;