import React from 'react'
import { Link } from 'react-router-dom'

export default function UserplaycourseLectures({ style }) {
  return (
    <>
      <div class={`row ${style}`}>
        <div class="col-md-6 mb-3">
          <div class="co">
            <div>
              <img src="./images/p1.png" alt="" class="less" />
            </div>
            <div class="bg-secondary good">
              <Link to="./usercoursevideo">MS Office</Link>
              <p>Lecture 1</p>
            </div>
          </div>
        </div>
        <div class="col-md-6 mb-3">
          <div class="co">
            <div>
              <img src="./images/p1.png" alt="" class="less" />
            </div>
            <div class="bg-secondary good">
              <Link to="./usercoursevideo">MS Office</Link>
              <p>Lecture 2</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
