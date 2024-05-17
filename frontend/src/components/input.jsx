import React from 'react'

const Input = ({type,setInput,placeholder,classname}) => {
  return (
    <input className={classname} type={type} placeholder={placeholder} onChange={(e) => setInput(e.target.value)} />
  )
}

export default Input