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

  const filteredProds = classifiedProds.filter((item) => {
    if (searchInput === "") {
      return true;
    } else if (
      item.title
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .includes(
          searchInput
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase()
        )
    ) {
      return true;
    } else {
      return false;
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
    filteredProds.map((item) => {
      return <Item data={item} key={item.id} />;
    })
  );
};

export default ItemList;
