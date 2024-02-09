import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Admin() {
    const navigate = useNavigate();
  return (
    <div>
        <button onClick={()=> navigate("/newProduct")}>Add a new product</button>      
    </div>
  )
}
