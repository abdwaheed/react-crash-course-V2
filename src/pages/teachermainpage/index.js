import React from 'react'
import Searchbar from '../../components/searchbar';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import { Link } from 'react-router-dom';
import TeacherStructure from '../../components/TeacherStructure'

export default function TeacherMainPage() {
  return (
    <>
      <Navbar />
      <Searchbar />

      {/* <section class="user-panel bg-white">
        <div class="dash-cover">
          <img src="./images/dashboard.PNG" alt="" class="w-100" />
        </div>


        <div class="dashboard-menu">
          <div class="container">
            <div class="col-md-9 offset-md-3">
              <ul>
                <li style={{ backgroundColor: 'rgb(66, 112, 143)' }}
                ><a href="./main-page.html">My Dashboard</a></li>
                <li><a href="./profile.html">My Profile</a></li>
                <li><a href="./intended-learners.html">Intended Learners</a></li>
                <li><a href="./course-landing.html">Course Landing</a></li>
              </ul>
            </div>
          </div>
        </div> */}

      <TeacherStructure>


        {/* <!-- FOR TEACHER MAIN PAGE --> */}
        <div class="main-page">
          <h1>Courses</h1>

          <div class=" d-flex justify-content-between">

            <div class="py-3">
              <input class="p-2" type="search" placeholder="Search Course" aria-label="Search" />
              <button class="btn btn-danger ms-1 mt-1" type="submit">Search</button>
            </div>

            <div class="py-3">
              <button class="btn btn-danger p-2" type="submit"><Link class="text-decoration-none text-white"
                to="/teachernewcourseP1">New
                Course</Link></button>
            </div>
          </div>


          <div class="teacher-course my-5 bg-white">
            <div class="row">
              <div class="col-md-10">
                <div>
                  <img src="./images/p1.png" alt="" class="less" />
                </div>

                <div class="good2 d1">
                  <Link to="./teacherintendedlearners" class="text-dark text-decoration-none">
                    <p>Html</p>

                    <div class='d2 px-4 w-100 edit-hover'
                      style={{ backgroundColor: 'none', justifyContent: 'center', alignItems: 'center', display: 'flex', height: '2rem' }}>

                      <p style={{ color: 'blue' }}>Edit/Manage Course</p>
                    </div>
                    <p class="pt-4 pb-0 mb-0">Draft <span>Public</span></p>
                  </Link>
                </div>
              </div>

              <div class="col-md-2" style={{ alignItems: 'center', display: 'flex', justifyContent: 'center' }}>
                <button class="w-100 btn btn-danger"><Link to="/teachercoursepreview"
                  class="text-decoration-none text-white">Preview</Link></button>
              </div>

            </div>



          </div>


          <div class="teacher-course my-5 bg-white">
            <div class="row">
              <div class="col-md-10">
                <div>
                  <img src="./images/p1.png" alt="" class="less" />
                </div>

                <div class="good2 d1">
                  <Link to="./teacherintendedlearners" class="text-dark text-decoration-none">
                    <p>Html</p>

                    <div class='d2 px-4 w-100 edit-hover'
                      style={{ backgroundColor: 'none', justifyContent: 'center', alignItems: 'center', display: 'flex', height: '2rem' }}>
                      <p style={{ color: 'blue' }}>Edit/Manage Course</p>
                    </div>
                    <p class="pt-4 pb-0 mb-0">Draft <span>Public</span></p>
                  </Link>
                </div>
              </div>

              <div class="col-md-2" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <button class="w-100 btn btn-danger"><Link to="/teachercoursepreview"
                  class="text-decoration-none text-white">Preview</Link></button>
              </div>

            </div>



          </div>

          <div class="teacher-course my-5 bg-white">
            <div class="row">
              <div class="col-md-10">
                <div>
                  <img src="./images/p1.png" alt="" class="less" />
                </div>

                <div class="good2 d1">
                  <Link to="./teacherintendedlearners" class="text-dark text-decoration-none">
                    <p>Html</p>

                    <div class='d2 px-4 w-100 edit-hover'
                      style={{ backgroundColor: 'none', justifyContent: 'center', alignItems: 'center', display: 'flex', height: '2rem' }}>
                      <p style={{ color: 'blue' }}>Edit/Manage Course</p>
                    </div>
                    <p class="pt-4 pb-0 mb-0">Draft <span>Public</span></p>
                  </Link>
                </div>
              </div>

              <div class="col-md-2" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <button class="w-100 btn btn-danger"><Link to="/teachercoursepreview"
                  class="text-decoration-none text-white">Preview</Link></button>
              </div>

            </div>



          </div>

        </div>

      </TeacherStructure>
      {/* </section > */}

      <Footer />
    </>
  )
}
