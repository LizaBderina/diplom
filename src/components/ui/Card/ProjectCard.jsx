// src/components/ui/Card/ProjectCard.jsx
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./styles.css";

export const ProjectCard = ({ className, title, description, image, to }) => {
  return (
    <Link
      className={`project-card ${className || ""}`}
      to={to || "/портфолио"}
      style={image ? {backgroundImage: `url(${image})`, backgroundSize: 'cover'} : {}}
    >
      <div className="project-title">{title || "Название"}</div>
      <div className="project-description">{description || "Описание"}</div>
    </Link>
  );
};

ProjectCard.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  to: PropTypes.string
};

export default ProjectCard;