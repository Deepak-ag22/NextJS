"use client";
import { useState } from "react";
import productData from "../../data/products.json";

export default function ProductList() {
  type Product = {
    id: number;
    name: string;
    description: string;
    price: number;
    category: string;
  };

  type ProdData = {
    products: Product[];
  };

  const [prod, setProd] = useState<ProdData>(productData);

  if (!prod) return <p>Loading...</p>;

  return (
    <>
      <div className="text-2xl font-bold mb-6">Product List</div>
      <div className="grid grid-cols-3 gap-6">
        {prod.products.map((product) => (
          <div
            key={product.id}
            className="bg-white p-4 rounded-lg shadow-md"
          >
            <p className="text-xl font-semibold mb-2">{product.name}</p>
            <p className="text-sm text-gray-600 mb-4">{product.description}</p>
            <p className="font-bold text-lg mb-4">${product.price.toFixed(2)}</p>
            <span className="text-sm text-gray-500">{product.category}</span>
          </div>
        ))}
      </div>
    </>
  );
}
