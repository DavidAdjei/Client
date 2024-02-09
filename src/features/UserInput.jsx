import React from 'react'

export default function UserInput({ placeholder, name, type, value, setValue }) {
    const handleChange = (e) => {
        setValue(e.target.value)
    }
  return (
    <div>
        <input
                  type={type}
                  value={value}
                  name={name}
                  placeholder={placeholder}
                  onChange={handleChange}
              />
    </div>
  )
}
