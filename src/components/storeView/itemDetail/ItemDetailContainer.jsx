// REACT
import React, { useState, useEffect } from "react";

// COMPONENTS
import ItemDetail from "./ItemDetail";

// REACT-ROUTER-DOM
import { useParams } from "react-router-dom";

// FIREBASE
import { db } from "../../firebaseConfig";
import { collection, getDocs, onSnapshot } from "firebase/firestore";

// CSS
import "./ItemDetail.css";

const itemDetailContainer = () => {
  const [products, setProducts] = useState([]);

  const { id, category } = useParams();

  const getProducts = () => {
    // Para obtener un instantanea desde la base de datos
    // let ref = collection(db, "products");
    // getDocs(ref).then((res) => {
    //   let arrayProducts = res.docs.map((product) => {
    //     return { ...product.data(), id: product.id };
    //   });
    //   const myProduct = arrayProducts.find(
    //     (item) => item.id === id && item.category === category
    //   );
    //   setProducts(myProduct);
    // });

    // Para obtener en tiempo real los cambios de la base de datos
    let ref = collection(db, "products");
    const unsubscribe = onSnapshot(ref, (querySnapshot) => {
      let arrayProducts = querySnapshot.docs.map((product) => {
        return { ...product.data(), id: product.id };
      });
      const myProduct = arrayProducts.find(
        (item) => item.id === id && item.category === category
      );
      setProducts(myProduct);
    });
    return unsubscribe;
  };

  // Para obtener un instantanea desde la base de datos
  // useEffect(() => {
  //   getProducts();
  // }, [category, id]);

  // Para obtener en tiempo real los cambios de la base de datos
  useEffect(() => {
    const unsubscribe = getProducts();
    return () => {
      unsubscribe();
    };
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
