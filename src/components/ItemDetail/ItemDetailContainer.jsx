import { useState, useEffect } from "react";
import { getSingleItem } from "../../Services/mockService";
import {useParams} from "react-router-dom";

function ItemDetailContainer() {
  const [product, setProduct] = useState([]);
  const {idCategory}=useParams();

  async function getItemsAsync() {
    let respuesta = await getSingleItem(idCategory);
    setProduct(respuesta);
  }

  useEffect(() => {
    getItemsAsync();
  }, []);

  return (
    <div className="item-list">
      <h3>{product.title}</h3>
      <img src={product.imgurl} />
    </div>
  );
}

export default ItemDetailContainer;
