// REACT
import React, { useContext } from "react";

// REACT-ROUTER-DOM
import { useParams } from "react-router-dom";

// CONTEXT
import { SiteContext } from "../../../context/SiteContext";

// COMPONENTS
import Item from "../item/Item";

const ItemList = ({ allProducts }) => {
  const products = allProducts;
  const { category } = useParams();
  const { searchInput } = useContext(SiteContext);

  const classifiedProds = category
    ? products.filter((item) => item.category === category)
    : products;

  // Modificar la función de abajo, reemplazar las cadenas por True y False
  const filteredProds = classifiedProds.filter((item) => {
    if (searchInput === "") {
      return item;
    } else if (
      item.title
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .includes(searchInput.normalize("NFD").replace(/[\u0300-\u036f]/g, ""))
    ) {
      return item;
    } else {
      return "";
    }
  });

  return filteredProds.length === 0 ? (
    category ? (
      <div className="searchMsg">
        <i className="fas fa-times-circle"></i>
        Ups... Producto no encontrado en esta categoria.
      </div>
    ) : (
      <div className="searchMsg">
        <i className="fas fa-times-circle"></i>
        Ups... Producto no encontrado la tienda.
      </div>
    )
  ) : (
    filteredProds.map((items) => {
      return <Item data={items} key={items.id} />;
    })
  );
};

export default ItemList;
