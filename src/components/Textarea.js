import React from 'react'

const Textarea = props => {
  const {handleChange, name, className, placeholder, title, type, value, accept, onClick} = props
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
          accept={accept}
        />
      </>
    )
}

export default Textarea
