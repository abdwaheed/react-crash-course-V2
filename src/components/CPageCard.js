import React from 'react'
import { Link } from 'react-router-dom'

export default function CPageCard({ img, heading, href }) {
  return (
    <div class="card co">
      <img src={img} class="card-img-top" alt="..." />
      <div class="card-body">
        <Link to={href}>
          <h4 class="card-title pb-1">{heading}</h4>
        </Link>
        <Link to={href} class="btn btn-primary">View Demo</Link>
      </div>
    </div>
  )
}
