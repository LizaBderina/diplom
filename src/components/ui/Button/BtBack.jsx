// src/components/ui/Button/BtBack.jsx
import React from "react";
import PropTypes from "prop-types";
import "./styles.css";

export const BtBack = ({ property1, className, onClick }) => {
  return (
    <div 
      className={`bt-back property-1-11-${property1 || "default"} ${className || ""}`}
      onClick={onClick}
    >
      <div className="button-text-2">Назад</div>
    </div>
  );
};

BtBack.propTypes = {
  property1: PropTypes.oneOf(["variant-2", "default"]),
  className: PropTypes.string,
  onClick: PropTypes.func
};