import React, { useState } from 'react'
import UserInput from '../../features/UserInput'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function NewProduct() {
  const [name, setName] = useState("");
  const [description, setDesc] = useState("");
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);
  const [category, setCategory] = useState('');
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("")
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    if (!name || !description || !stock || !price || !image || !category) {
          setError('Please fill in all fields');
          setLoading(false);
    }
    try {
      const { data } = await axios.post("http://localhost:8000/addProducts", {
          name, description, price, stock, category, image
      }
      )
      if (!data.error) {
        setLoading(false);
        console.log("Product added");
        alert('Product added');
        navigate("/admin");
      }
    } catch (error) {
      
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <UserInput
          type='text'
          value={name}
          name="name"
          placeholder="Enter Product Name"
          setValue={setName}
        />
        <UserInput
          type='text'
          value={description}
          name="description"
          placeholder="Short description"
          setValue={setDesc}
        />
        <UserInput
          type='number'
          value={price}
          name="price"
          placeholder="Enter Product Price"
          setValue={setPrice}
        />
        <UserInput
          type='number'
          value={stock}
          name="stock"
          placeholder="Number of Products"
          setValue={setStock}
        />
        <UserInput
          type='text'
          value={category}
          name="category"
          placeholder="Cateory of the product"
          setValue={setCategory}
        />
        <UserInput
          type='text'
          value={image}
          name= "image"
          placeholder="Enter Product Image Url"
          setValue={setImage}
        />
        <input type="submit" />
      </form>
      
    </div>
  )
}
