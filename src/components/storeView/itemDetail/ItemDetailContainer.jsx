// REACT
import React, { useState, useEffect } from "react";

// COMPONENTS
import ItemDetail from "./ItemDetail";

// REACT-ROUTER-DOM
import { useParams } from "react-router-dom";

// // FIREBASE
// import { db } from "../../Firebase";

// CSS
import "./ItemDetail.css";

const itemDetailContainer = () => {
  return <ItemDetail />;
};

export default itemDetailContainer;
