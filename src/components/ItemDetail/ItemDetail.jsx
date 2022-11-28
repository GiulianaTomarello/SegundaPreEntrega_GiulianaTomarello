import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";


function ItemDetail({ product }) {
  function onAddToCart(count){
    alert(`agregaste ${count} items al carrito!`)
  }
  return (
    <div className="card-detail-2">
      <div className="card-detail_img-2">
        <img src={product.imgurl} alt="Product img" />
      </div>
      <div className="card-detail_detail">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <h4 className="priceTag">$ {product.price}</h4>
      </div>
      <ItemCount onAddToCart={onAddToCart} stock={product.stock}/>
      </div>
  );
}


export default ItemDetail;