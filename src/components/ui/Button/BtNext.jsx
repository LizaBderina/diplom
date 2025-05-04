// src/components/ui/Button/BtNext.jsx
import React from "react";
import PropTypes from "prop-types";
import "./styles.css";

export const BtNext = ({ property1, className, onClick }) => {
  return (
    <div 
      className={`bt-next property-1-10-${property1 || "default"} ${className || ""}`}
      onClick={onClick}
    >
      <div className="button-text">Далее</div>
    </div>
  );
};

BtNext.propTypes = {
  property1: PropTypes.oneOf(["variant-2", "default"]),
  className: PropTypes.string,
  onClick: PropTypes.func
};