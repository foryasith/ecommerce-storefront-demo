import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px" }}>
      <img src={product.image} alt={product.name} width="100%" />
      <h3>{product.name}</h3>
      <p>LKR {product.price}</p>
      <Link to={`/products/${product.id}`}>View</Link>
    </div>
  );
};

export default ProductCard;