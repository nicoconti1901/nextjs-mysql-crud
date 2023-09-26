"use client";
import { useRef, useState } from "react";
import axios from "axios";

function ProductForm() {
  const [product, setProduct] = useState({
    name: "",
    price: 0,
    description: "",
  });
  const form = useRef(null);

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await axios.post("/api/products", product);
    console.log(res);
    form.current.reset();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded-md px-8 pt-6 pb-8 mb-4"
      ref = {form}
    >
      <label
        htmlFor="name"
        className="block text-gray-700 text-sm font-bold mb-2"
      >
        Product Name
      </label>
      <input
        type="text"
        placeholder="name"
        name="name"
        onChange={handleChange}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />

      <label
        htmlFor="price"
        className="block text-gray-700 text-sm font-bold mb-2"
      >
        Product Price
      </label>
      <input
        type="number"
        placeholder="00,0"
        name="price"
        onChange={handleChange}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />

      <label
        htmlFor="description"
        className="block text-gray-700 text-sm font-bold mb-2"
      >
        Product Description
      </label>
      <textarea
        rows={3}
        name="description"
        placeholder="description"
        onChange={handleChange}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white 
      font-bold py-2 px-4 rounded"
      >
        Save Product
      </button>
    </form>
  );
}

export default ProductForm;
