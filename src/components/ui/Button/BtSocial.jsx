// src/components/ui/Button/BtSocial.jsx
import React, { useState } from "react";
import PropTypes from "prop-types";
import { SocialIcons } from "../../common";
import "./styles.css";

export const BtSocial = ({ property1, className, socialMediaTextClassName }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`bt-soc ${property1 || "default"} ${className || ""}`} style={{ position: "relative" }}>
      <div
        className={`social-media-text ${socialMediaTextClassName || ""}`}
        onClick={toggleMenu}
        style={{ cursor: "pointer" }}
      >
        Соц-сети
      </div>
      {isOpen && (
        <div className="social-dropdown">
          <SocialIcons />
        </div>
      )}
    </div>
  );
};

BtSocial.propTypes = {
  property1: PropTypes.oneOf(["variant-2", "default"]),
  className: PropTypes.string,
  socialMediaTextClassName: PropTypes.string,
};
