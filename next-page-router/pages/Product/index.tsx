"use client"
import "@/styles/globals.css";
import { useEffect, useState } from "react";

type product = {
  id: number;
  title: string;
};

type ProductData = {
  products: product[];
};

export default function Product() {
  const [data, setData] = useState<ProductData | null>(null);
  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=3")
      .then((response) => {
        if (!response.ok) throw new Error("Invalid request!");
        return response.json();
      })
      .then((data: ProductData) => {
        setData(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div>
        <table className="border-collapse">
          <thead>
            <tr>
              <th className="border p-4">Id</th>
              <th className="border p-4">Title</th>
            </tr>
          </thead>
          <tbody>
            {data.products.map((product) => (
              <tr key={product.id}>
                <td className="border p-4">{product.id}</td>
                <td className="border p-4">{product.title}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
