'use client';
import Image from "next/image";
import { useEffect, useState } from "react";


type Product = {
  thumbnail: string;
};


type Products = {
  products: Product[];
};




export default function ImagePage() {
  const [data, setData] = useState<Products | null>(null);


  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=5")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);


  return (
    <>
     <div className="flex row-auto">
      <h1>Cart Data</h1>
      {
        data?.products?.map((value,i)=>{
            return(
                //Image optimization
                <Image src={value.thumbnail} alt="Image Here.." height={200} width={200}/>
            )
        })
      }
        </div>
    </>
   
  );
}
