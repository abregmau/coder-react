// REACT
import React, { useContext, useEffect } from "react";
// CONTECT
import { SiteContext } from "../../context/SiteContext";

// COMPONENTS
import Home from "./Home";

// CSS
import "./Home.css";

const HomeContainer = () => {
  const { setIsInStore, setIsInHome, setSearchInput } = useContext(SiteContext);

  useEffect(() => {
    setIsInStore(false);
    setIsInHome(true);
    setSearchInput("");
  }, [setIsInStore, setIsInHome, setSearchInput]);

  return <Home />;
};

export default HomeContainer;
