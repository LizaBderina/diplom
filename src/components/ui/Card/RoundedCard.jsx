// src/components/ui/Card/RoundedCard.jsx
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./styles.css";

export const RoundedCard = ({
  userMessageClassName,
  userNameClassName,
  messageBackgroundClassName,
  title = "Название",
  date = "Дата",
  to
}) => {
  return (
    <Link
      className="rounded-rectangle"
      to={to || "/статьи-фул-хд"}
    >
      <div className={`user-message ${userMessageClassName || ""}`}>{title}</div>
      <div className={`user-name-2 ${userNameClassName || ""}`}>{date}</div>
      <div className={`message-background ${messageBackgroundClassName || ""}`} />
    </Link>
  );
};

RoundedCard.propTypes = {
  userMessageClassName: PropTypes.string,
  userNameClassName: PropTypes.string,
  messageBackgroundClassName: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string,
  to: PropTypes.string
};

export default RoundedCard;