import React from 'react'

export default function Textbox({ type, placeholder }) {
  return (
    <div className="form-group mt-3">
      <input type={type} className="form-control" id="exampleFormControlInput1" placeholder={placeholder} />
    </div>
  )
}
