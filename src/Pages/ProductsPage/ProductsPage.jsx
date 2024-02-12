import React from 'react';
import "./products.css"

export default function ProductsPage({ products, setProducts }) {  
  return (
    <div className="products_container">
      <div className="category">
        <p>Categories</p>
        <button className="add_button">All categories</button>
        <button className="add_button">Provisions</button>
        <button className="add_button">Beverages</button>
        <button className="add_button">Toiletries</button>
        <button className="add_button">School</button>
        <button className='add_button'>See all</button>

      </div>
      <div className="products_page">
        {products.map((product, index) => (
          <div key={index} className='products'>
            <div className='product__image-container'>
              <img src={product.image.url} alt={`${product.name}'s pic`} />
            </div>
            <p className='product_name'>{product.name}</p> 
            <p className='product_price'>{product.price} cedis</p>
            <button className='add_button'>Add to cart</button>
          </div>
        ))}  
      </div>
    </div>
    
  )
}
