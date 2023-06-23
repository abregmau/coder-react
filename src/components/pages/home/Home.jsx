const Home = ({ sumar, setContador, contador }) => {
  return (
    <div style={{ padding: "0 20px" }}>
      <h1>Estoy en el Home</h1>
      <h2>{contador}</h2>
      <button onClick={sumar}>Sumar</button>
    </div>
  );
};

export default Home;
