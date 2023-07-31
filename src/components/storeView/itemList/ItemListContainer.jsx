// REACT
import React, { useState, useEffect } from "react";

// COMPONENTS
import ItemList from "./ItemList";

// // FIREBASE
// import { db } from "../../../Firebase";

// AXIOS
import axios from "axios";

// Products Mock for Dev
// import productsMock from "../../productsMock";

// CSS
import "./ItemList.css";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    //   const firebaseProducts = [];
    //   db.collection("buncitsProducts").onSnapshot((querySnapshot) => {
    //     querySnapshot.forEach((item) => {
    //       firebaseProducts.push({ ...item.data(), id: item.id });
    //     });
    //     setProducts(firebaseProducts);
    //   });

    // DEV !!!!!!!!!!
    // setProducts(productsMock);

    // Pruebas Back-End con Fetch
    // let data = fetch.get("http://localhost:5000/products");
    // data
    //   .then((res) => res.json())
    //   .then((res) => setProducts(res))
    //   .catch((error) => console.log(error));

    // Pruebas Back-End con Fetch
    let data = axios.get("http://localhost:5000/products");
    data
      .then((res) => setProducts(res.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="item-list-container row px-0 mx-0 my-5">
      {products.length === 0 ? (
        <div className="loadingMsg">
          <p>
            cargando productos...
            <br /> <span className="loadingMsg_Logo">landmark.</span>
          </p>
        </div>
      ) : (
        <ItemList allProducts={products} />
      )}
    </div>
  );
};

export default ItemListContainer;
