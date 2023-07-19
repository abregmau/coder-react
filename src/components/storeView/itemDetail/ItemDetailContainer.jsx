// REACT
import React, { useState, useEffect } from "react";

// COMPONENTS
import ItemDetail from "./ItemDetail";

// REACT-ROUTER-DOM
import { useParams } from "react-router-dom";

// // FIREBASE
// import { db } from "../../Firebase";

// Products Mock for Dev
import productsMock from "../../productsMock";

// CSS
import "./ItemDetail.css";

const itemDetailContainer = () => {
  const [products, setProducts] = useState([]);

  const { id, category } = useParams();

  useEffect(() => {
    const firebaseProducts = [];
    // db.collection("buncitsProducts").onSnapshot((querySnapshot) => {
    //   querySnapshot.forEach((item) => {
    //     firebaseProducts.push({ ...item.data(), id: item.id });
    //     const myProduct = firebaseProducts.find(
    //       (item) => item.id === id && item.category === category
    //     );
    //     setProducts(myProduct);
    //   });
    // });

    // DEV !!!!!!!!!!
    const myProduct = productsMock.find(
      (item) => item.id === id && item.category === category
    );
    setProducts(myProduct);
  }, [category, id]);

  return (
    <>
      <div className="item-list-container row px-0 mx-0 my-5">
        {!products ? (
          <div className="loadingMsg">
            <p>
              producto inexistente
              <br /> <span className="loadingMsg_Logo">buncits.</span>
            </p>
          </div>
        ) : products.length === 0 ? (
          <div className="loadingMsg">
            <p>
              cargando vista de detalle
              <br /> <span className="loadingMsg_Logo">buncits.</span>
            </p>
          </div>
        ) : (
          <ItemDetail data={products} />
        )}
      </div>
    </>
  );
};

export default itemDetailContainer;
