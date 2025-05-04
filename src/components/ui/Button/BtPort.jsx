// src/components/ui/Button/BtPort.jsx
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./styles.css";

export const BtPort = ({
  property1,
  className,
  newsButtonTextClassName,
  text = "Портфолио",
  to,
}) => {
  return (
    <Link className={`bt-port ${className || ""}`} to={to}>
      <div className={`news-button-text ${newsButtonTextClassName || ""}`}>
        {text}
      </div>
    </Link>
  );
};

BtPort.propTypes = {
  property1: PropTypes.oneOf(["variant-2", "default"]),
  className: PropTypes.string,
  newsButtonTextClassName: PropTypes.string,
  text: PropTypes.string,
  to: PropTypes.string,
};