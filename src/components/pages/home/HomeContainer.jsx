import { useState } from "react";
import Home from "./Home";

const HomeContainer = () => {
  const [contador, setContador] = useState(0);

  const sumar = () => {
    setContador(contador + 1);
  };
  return <Home sumar={sumar} setContador={setContador} contador={contador} />;
};

export default HomeContainer;
