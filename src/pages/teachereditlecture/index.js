import React from 'react'
import Navbar from '../../components/navbar'
import Searchbar from '../../components/searchbar'
import Footer from '../../components/footer'
import TeacherStructure from '../../components/TeacherStructure'
import { Link } from 'react-router-dom'

export default function TeacherEditLecture() {
  return (
    <>
      <Navbar />
      <Searchbar />

      <TeacherStructure>
        <div class="intended-learners my-5">
          <div class="dog d-flex justify-content-between overflow-hidden">
            <div>
              <h3 class="py-4 px-5">EDIT LECTURE</h3>
            </div>

            {/* <div class="mt-4"><button class="me-4 py-2"><Link to="/teachereditlecture"
              class="text-dark text-decoration-none">
              EDIT LECTURE</Link></button></div> */}
          </div>




          <p class="pt-4 pb-0 px-5 bold">Enter Lecture Number
          </p>

          <div class=" d-flex justify-content-between overflow-hidden">

            <div class="intend-lrn-search mb-3">
              <input class="form-control py-3 ps-3" type="search" placeholder="Example: Enter Lecture Number to Find " aria-label="Search" />
            </div>

            <div class="mt-2"><button class="me-4 py-2"><Link to="/teachereditlecture"
              class="text-dark text-decoration-none">
              FIND LECTURE</Link></button>
            </div>
            {/* <div class="mt-2"><button class="me-4 py-2"><Link to="/teachereditlecture"
              class="text-dark text-decoration-none">
              DELETE</Link></button>
            </div> */}

          </div>

          <p class="pt-4 pb-0 px-5 bold">Enter Lecture Title
          </p>


          <div class="intend-lrn-search mb-3">
            <input class="form-control py-3 ps-3" type="search" placeholder="Example: Enter Lecture Title "
              aria-label="Search" />
          </div>

          <p class="pt-4 pb-0 px-5 bold">Enter Lecture Description
          </p>


          <div class="intend-lrn-search mb-3">
            <input class="form-control py-3 ps-3" type="search" placeholder="Example: Enter Lecture Description "
              aria-label="Search" />
          </div>


          <p class="pt-4 pb-0 px-5 bold">Enter Youtube Link For The Lecture
          </p>


          <div class="intend-lrn-search mb-3">
            <input class="form-control py-3 ps-3" type="search" placeholder="Example: Enter URL / LINK "
              aria-label="Search" />
          </div>



          <div class="intend-lrn-search mb-5 py-3">
            <button class="btn btn-dark w-50 p-2" type="submit"><a class="text-decoration-none text-white"
              href="./intender-learners.html">Update</a></button>
          </div>

        </div>

      </TeacherStructure>

      <Footer />
    </>
  )
}
