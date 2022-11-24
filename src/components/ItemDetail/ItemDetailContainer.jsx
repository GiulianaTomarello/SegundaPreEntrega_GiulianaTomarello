import { useState, useEffect } from "react";
import { getSingleItem } from "../../Services/mockService";
import {useParams} from "react-router-dom";

function ItemDetailContainer() {
  const [product, setProduct] = useState({});
  const {id}=useParams();

  async function getItemsAsync() {
    let respuesta = await getSingleItem(id);
    setProduct(respuesta);
  }

  useEffect(() => {
    getItemsAsync();
  }, []);

  return (
    <div className="item-list">
      <h3>{product.title}</h3>
      <h3>{product.price}</h3>
      <h3>{product.description}</h3>
      <img src={product.imgurl} />
    </div>
  );
}

export default ItemDetailContainer;
