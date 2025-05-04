// src/components/ui/Card/NewsCard.jsx
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./styles.css";

export const NewsCard = ({ className, title, description, date, image, to }) => {
  return (
    <Link
      className={`news-card ${className || ""}`}
      to={to || "/статьи-фул-хд"}
      style={image ? {backgroundImage: `url(${image})`, backgroundSize: 'cover'} : {}}
    >
      <div className="news-category">{title || "Название"}</div>
      <div className="news-title">{description || "Описание"}</div>
      {date && <div className="news-date">{date}</div>}
    </Link>
  );
};

NewsCard.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  date: PropTypes.string,
  image: PropTypes.string,
  to: PropTypes.string
};

export default NewsCard;