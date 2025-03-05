"use client";
import { useParams } from "next/navigation";
import productData from "../../../data/products.json";

type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
};

type Params = {
  product_id: string;
};

export default function ProductDetails() {
  const params = useParams() as Params;
  const productId = parseInt(params.product_id);

  const product: Product | undefined = productData.products.find(
    (prod: Product) => prod.id === productId
  );

  if (!product) {
    return (
      <>
      <p>Loading...</p>
      </>
    );
  }

  return (
    <div className="product-details p-6">
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <p className="text-lg text-gray-700 mt-2">{product.description}</p>
      <p className="font-bold text-xl mt-4">${product.price.toFixed(2)}</p>
      <p className="text-sm text-gray-500 mt-2">Category: {product.category}</p>
    </div>
  );
}
