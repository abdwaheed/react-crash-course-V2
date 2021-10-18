import React from 'react'
import { Link } from 'react-router-dom'

export default function AcourseCard({ img, href, heading }) {
  return (
    <div className="card co">
      <img src={img} className="card-img-top" alt="..." />
      <div className="card-body">
        <Link to={href}>
          <h4 className="card-title pb-1">{heading}</h4>
        </Link>

        <p className="card-text">Classes started from coming friday(21 jun 2017)
        </p>
        <a href="popular-course.html" className="btn btn-primary">View Demo</a>
        <a href="signup.html" className="btn btn-light border-dark">Registration</a>
      </div>
    </div>
  )
}
