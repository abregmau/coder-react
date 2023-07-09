import Navbar from "./components/layout/navbar/Navbar";
import HomeContainer from "./components/pages/home/HomeContainer";
import ItemListContainer from "./components/pages/itemList/ItemListContainer";
import Material from "./components/pages/material/Material";

function App() {
  return (
    <div>
      <Navbar />
      <HomeContainer />
      <ItemListContainer />
      <Material />
    </div>
  );
}

export default App;
