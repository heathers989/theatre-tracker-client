import React from 'react'

const Input = props => {
  const {handleChange, name, className, placeholder, title, type, value, onClick} = props
    return (
      <>
        <label htmlFor={name}>{title}</label>
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          onClick={onClick}
          className={className}
        />
      </>
    )
}

export default Input
