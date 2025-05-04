// src/components/ui/Button/BtZak.jsx
import React from "react";
import PropTypes from "prop-types";
import "./styles.css";

export const BtZak = ({ property1, className, orderTextClassName, onClick }) => {
  return (
    <div 
      className={`bt-zak ${className || ""}`}
      onClick={onClick}
    >
      <div className={`order-text ${orderTextClassName || ""}`}>Заказать</div>
    </div>
  );
};

BtZak.propTypes = {
  property1: PropTypes.oneOf(["variant-2", "default"]),
  className: PropTypes.string,
  orderTextClassName: PropTypes.string,
  onClick: PropTypes.func
};