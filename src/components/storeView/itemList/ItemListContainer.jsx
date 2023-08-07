// REACT
import React, { useState, useEffect } from "react";

// COMPONENTS
import ItemList from "./ItemList";

// FIREBASE
import { db } from "../../firebaseConfig";
import { collection, getDocs, onSnapshot } from "firebase/firestore";

// CSS
import "./ItemList.css";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    // Para obtener un instantanea desde la base de datos
    // let ref = collection(db, "products");
    // getDocs(ref).then((res) => {
    //   let arrayProducts = res.docs.map((product) => {
    //     return { ...product.data(), id: product.id };
    //   });
    //   setProducts(arrayProducts);
    // });

    // Para obtener en tiempo real los cambios de la base de datos
    let ref = collection(db, "products");
    const unsubscribe = onSnapshot(ref, (querySnapshot) => {
      let arrayProducts = querySnapshot.docs.map((product) => {
        return { ...product.data(), id: product.id };
      });
      setProducts(arrayProducts);
    });
    return unsubscribe;
  };

  // Para obtener un instantanea desde la base de datos
  // useEffect(() => {
  //   getProducts();
  // }, []);

  // Para obtener en tiempo real los cambios de la base de datos
  useEffect(() => {
    const unsubscribe = getProducts();
    return () => {
      unsubscribe();
    };
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
