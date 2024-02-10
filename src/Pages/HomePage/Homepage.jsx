import React from 'react';

export default function Homepage({ products, setProducts }) {  
  return (
    <div>
      {products.map((product, index) => (
        <div key={index}>
          <p>{product.name}</p> 
          <img src={product.image.url} alt={`${product.name}'s pic`} />
          <p>{product.price} cedis</p>
        </div>
      ))}
    </div>
    
  )
}
