// REACT
import React, { useContext, useEffect } from "react";

// // CONTEXT
// import { SiteContext } from "../../context/SiteContext";

// COMPONENTS
import ItemDetailContainer from "../../components/storeView/itemDetail/ItemDetailContainer";
// import ModalComponent from "../../components/Checkout/CheckoutComponents/ModalComponent";

const ProductDetail = () => {
  // const { setIsInStore, setIsInHome, openModal, qtyModal, setSearchInput } =
  //   useContext(SiteContext);

  // useEffect(() => {
  //   setIsInStore(true);
  //   setIsInHome(false);
  //   setSearchImput("");
  // }, [setIsInStore, setIsInHome, setSearchInput]);

  return (
    <div>
      <ItemDetailContainer />
      {/* {openModal ? <ModalComponent amount={qtyModal} /> : ""} */}
    </div>
  );
};

export default ProductDetail;
