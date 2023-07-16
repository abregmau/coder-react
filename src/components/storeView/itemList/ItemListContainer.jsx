// REACT
import React, { useState, useEffect } from "react";

// COMPONENTS
import ItemList from "./ItemList";

// // FIREBASE
// import { db } from "../../../Firebase";

// CSS
import "./ItemList.css";

const ItemListContainer = () => {
  // const [products, setProducts] = useState([]);

  // const getProducts = () => {
  //   const firebaseProducts = [];
  //   db.collection("buncitsProducts").onSnapshot((querySnapshot) => {
  //     querySnapshot.forEach((item) => {
  //       firebaseProducts.push({ ...item.data(), id: item.id });
  //     });
  //     setProducts(firebaseProducts);
  //   });
  // };

  // useEffect(() => {
  //   getProducts();
  // }, []);

  return (
    <div className="item-list-container row px-0 mx-0 my-5">
      {true ? (
        <div className="loadingMsg">
          <p>
            cargando productos...
            <br /> <span className="loadingMsg_Logo">landmark.</span>
          </p>
        </div>
      ) : (
        <ItemList />
      )}
    </div>
  );
};

export default ItemListContainer;
