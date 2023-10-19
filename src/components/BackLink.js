// BackLink.js
import React from 'react';
import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';
import '../css/BackLink.css'; // Crie este arquivo de estilo

const BackLink = ({ to, text }) => {
  return (
    <Link to={to} className="back-link">
      <BsArrowLeft /> {text}
    </Link>
  );
}

export default BackLink;
