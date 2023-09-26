import axios from "axios";

async function loadProducts() {
  const { data } = await axios.get("http://localhost:3000/api/products");
  return data;
}
async function ProductsPage() {
  const products = await loadProducts();
  return (
    <div className="grid gap-4 grid-cols-4">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white rounded-lg border-gray-800 mb-3 p-4"
        >
          <h1 className="text-lg font-bold">{product.name}</h1>
          <h1 className="text-2xl text-slate-600">{product.price}</h1>
          <h1>{product.description}</h1>
        </div>
      ))}
    </div>
  );
}

export default ProductsPage;
