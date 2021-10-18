import React from 'react'
import { Link } from 'react-router-dom'

export default function Formbutton({ type, classname, value, href, text }) {
  return (
    <div className="form-group text-center">
      <input type={type} value={value} className={classname} />
      {value ? <><br /> <Link to={href}>{text}</Link> </> : <Link to={href}>{text}</Link>}
    </div>
  )
}
