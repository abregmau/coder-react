import { useState } from "react";

const Home = () => {
  const [contador, setContador] = useState(0);

  const sumar = () => {
    setContador(contador + 1);
  };
  return (
    <div style={{ padding: "0 20px" }}>
      <h1>Estoy en el Home</h1>
      <h2>{contador}</h2>
      <button onClick={sumar}>Sumar</button>
    </div>
  );
};

export default Home;
