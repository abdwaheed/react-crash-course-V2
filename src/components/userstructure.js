import React from 'react'
import UserButton from './userbutton'

export default function UserStructure({ children }) {
  return (
    <>
      <section class="user-panel bg-light">
        <div class="dash-cover">
          <img src="./images/dashboard.PNG" alt="" class="w-100" />
        </div>



        <div class="dashboard-menu">
          <div class="container">
            <div class="col-md-9 offset-md-3">
              <ul>
                <li><a href="dashboard-selected-courses.html">My Dashboard</a></li>
                <li styles="background-color: rgb(66, 112, 143);
            "><a href="dashboard.html">My Profile</a></li>
                <li><a href="dashboard-completed-courses.html">Completed Courses</a></li>
                <li><a href="dashboard-new-course.html">Select New Courses</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div class="dashboard-form">
          <div class="row">
            <div class="col-md-3">
              <div class="img-container mt-5">
                <img src="./images/dash-form-logo.jpg" alt="" class="w-100" />
              </div>

              <div class="logo-text">
                <ul class="text-center list-unstyled">
                  <li>ABC</li>
                  <li>Roll No: 111</li>
                </ul>
              </div>
            </div>

            <div class="col-md-9">
              <div class="table-container my-5">

                <div class="how pb-3">
                  <table class="w-100">
                    <tbody>

                      {children}

                    </tbody>
                  </table>

                  <div class="row edit-profile">
                    <a href="dashboard-edit.html" class="my-4"><input type="submit" class="btn btn-success p-2"
                      value="Edit Profile" /></a>
                  </div>


                  {/* <UserButton /> */}

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
