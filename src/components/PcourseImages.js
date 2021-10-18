import React from 'react'
import { Link } from 'react-router-dom'

export default function PcourseImages({ href, src }) {
  return (
    <div className="col-md-3">
      <figure className="course-pic">
        <Link to={href}> <img src={src} alt="" /> </Link>
      </figure>
    </div>
  )
}
