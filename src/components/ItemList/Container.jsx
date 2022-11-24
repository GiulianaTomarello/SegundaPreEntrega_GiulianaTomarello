import { useState, useEffect } from "react";

import Item from "./Item";
import "./itemgeneral.css";
import { getSingleItem } from "../../Services/mockService";
import { useParams } from "react-router-dom";
import getItems from "../../Services/mockService";


function Container() {
  const [products, setProducts] = useState([]);
  // const parametrosUrl = useParams();
  const {idCategory}= useParams();

  async function getItemsAsync() {
    let respuesta = await getItems(idCategory);
    setProducts(respuesta);
  }

  useEffect(() => {
    getItemsAsync();
  }, [idCategory]);

  return (
    <div className="itemgeneral">
      {products.map((product) => {
        return (
          <Item
            key={product.id}
            id={product.id}
            imgurl={product.imgurl}
            title={product.title}
            price={product.price}
            category={product.category}
            color="darkgreen"
          />
        );
      })}
    </div>
  );
}

export default Container;
