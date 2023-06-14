import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getProducts } from "../api/products";
import { useState, useEffect } from "react";
import { Layaot, Styles } from "../styles/Style";

const Product = () => {
  const [itemPod, setItemProd] = useState([]);

  useEffect(() => {
    getProducts().then((result) => {
      setItemProd(result);
      console.log({ tes: result });
    });
  }, []);

  const ProdItem = () => {
    return itemPod.map((prod, i) => {
      return (
        <div>
          <div className={`w-60 ${Layaot.bordProd}`} key={i}>
            <div className={Styles.flexCenter}>
              <img src={prod.image} alt="" className=" h-44 rounded-t-md" />
            </div>
            <div className="py-2">
              <div className="px-3 py-2 h-32 mb-5">
                <h1 className="mb-1 capitalize text-lg h-8 overflow-hidden">{prod.name}</h1>
                <p className=" text-xs h-14 overflow-hidden leading-normal">{prod.description}</p>
              </div>
            </div>
            <h2 className="absolute bottom-2 left-3">${prod.price}</h2>
            <button className={`absolute bottom-0 right-0 flex ${Layaot.btnProd}`}>
              <FontAwesomeIcon icon="fa-solid fa-cart-plus" />
            </button>
          </div>
        </div>
      );
    });
  };

  return <ProdItem />;
};

export default Product;
