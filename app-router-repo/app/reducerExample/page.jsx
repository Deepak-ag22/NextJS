"use client"

import { useReducer, useEffect, useState } from 'react';
import { productReducer, initialState } from './reducers/productReducer';
import { getProducts, addProduct, deleteProduct } from './actions/productAction';

export default function ProductPage() {
  const [state, dispatch] = useReducer(productReducer, initialState);
  const [formData, setFormData] = useState({ title: '', price: '' });

  useEffect(() => {
    dispatch(getProducts([]));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      id: Date.now(),
      title: formData.title,
      price: Number(formData.price)
    };
    dispatch(addProduct(newProduct));
    setFormData({ title: '', price: '' });
  };

  const handleForm = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="p-4">
      <h1 className="text-large mb-4">Products</h1>
      
      <form onSubmit={handleSubmit} className="mb-4">
        <input 
          type="text" 
          name="title" 
          value={formData.title} 
          onChange={handleForm} 
          placeholder="Product Title" 
          className="border p-2" 
          required 
        />
        <input 
          type="number" 
          name="price" 
          value={formData.price} 
          onChange={handleForm} 
          placeholder="Enter Price.." 
          className="border p-2" 
          required 
        />
        <button className="bg-blue-500 text-white p-2">Add</button>
      </form>

      <div>
        {state.products.map((product) => (
          <div key={product.id} className="flex justify-between border p-2 mb-2">
            <div>
              <span className="font-bold">{product.title}</span>
              <span className="ml-2">Rs.{product.price}</span>
            </div>
            <button onClick={() => dispatch(deleteProduct(product.id))} className="bg-gray-300">
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}