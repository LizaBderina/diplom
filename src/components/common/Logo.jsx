// src/components/common/Logo.jsx
import React from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import "./styles.css";

export const Logo = ({
  className,
  vectorClassName,
  vector = "/img/vector-234250503-1.svg",
  designerStudioClassName,
  designerNameClassName,
  to,
}) => {
  return (
    <Link className={`logo-component ${className || ""}`} to={to || "/"}>
      <img className={`vector ${vectorClassName || ""}`} alt="Vector" src={vector} />
      <div className={`designer-studio ${designerStudioClassName || ""}`}>
        студия дизайна
      </div>
      <div className={`designer-name ${designerNameClassName || ""}`}>
        АЛЕКСАНДРА
        <br />
        БАТЕНЬКОВА
      </div>
    </Link>
  );
};

Logo.propTypes = {
  className: PropTypes.string,
  vectorClassName: PropTypes.string,
  vector: PropTypes.string,
  designerStudioClassName: PropTypes.string,
  designerNameClassName: PropTypes.string,
  to: PropTypes.string,
};