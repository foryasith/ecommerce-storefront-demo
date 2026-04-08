import products from "../data/products";
import ProductCard from "../components/ProductCard";

const Products = () => {
  return (
    <div>
      <h1>All Products</h1>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px" }}>
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
};

export default Products;