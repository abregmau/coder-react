// REACT
import React from "react";

// CSS
import "./Footer.css";

const footer = ({ copyright = "Todos los derechos reservados." }) => {
  return (
    <div className="footer">
      <p>©</p>
      <div className="footer_logo">landmark.</div>
      <span> - </span>
      <p>{copyright}</p>
    </div>
  );
};

export default footer;
