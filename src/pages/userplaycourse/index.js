import React from 'react'
import Searchbar from '../../components/searchbar';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import Comments from '../../components/comments';
import UserplaycourseLectures from '../../components/UserplaycourseLectures';
import Formbutton from '../../components/formbutton';
import { Link } from 'react-router-dom';

export default function UserplayCourse() {
  return (
    <>
      <Navbar />
      <Searchbar />

      <section class="dashboard-lesson pt-5">
        <div class="banner text-center py-5 text-white bg-danger" styles="background-color: #dc3545;">
          <h2>C++ PROGRAMMING LANGUAGE</h2>
          <p>If you have any further question please feel free to contact with us 11AM to 8PM only business days.</p>
        </div>
      </section>



      <section class="user-panel available-courses">

        <div class="courses1 py-5">

          <div class="ten text-white">
            {/* <div class="row mt-5">
              <div class="col-md-6 mb-3">
                <div class="co">
                  <div>
                    <img src="../assets/images/p1.png" alt="" class="less" />
                  </div>
                  <div class="bg-secondary good">
                    <a href="./course-videos.html">MS Office</a>
                    <p>Lecture 1</p>
                  </div>
                </div>
              </div>
              <div class="col-md-6 mb-3">
                <div class="co">
                  <div>
                    <img src="../assets/images/p1.png" alt="" class="less" />
                  </div>
                  <div class="bg-secondary good">
                    <a href="./course-videos.html">MS Office</a>
                    <p>Lecture 2</p>
                  </div>
                </div>
              </div>
            </div> */}

            <UserplaycourseLectures style='mt-5' />


            {/* <div class="row">
              <div class="col-md-6 mb-3">
                <div class="co">
                  <div>
                    <img src="./images/p1.png" alt="" class="less" />
                  </div>
                  <div class="bg-secondary good">
                    <a href="./course-videos.html">MS Office</a>
                    <p>Lecture 3</p>
                  </div>
                </div>
              </div>
              <div class="col-md-6 mb-3">
                <div class="co">
                  <div>
                    <img src="./images/p1.png" alt="" class="less" />
                  </div>
                  <div class="bg-secondary good">
                    <a href="./course-videos.html">MS Office</a>
                    <p>Lecture 4</p>
                  </div>
                </div>
              </div>
            </div> */}

            <UserplaycourseLectures />


            {/* <div class="row">
              <div class="col-md-6 mb-3">
                <div class="co">
                  <div>
                    <img src="./images/p1.png" alt="" class="less" />
                  </div>
                  <div class="bg-secondary good">
                    <a href="./course-videos.html">MS Office</a>
                    <p>Lecture 5</p>
                  </div>
                </div>
              </div>
              <div class="col-md-6 mb-3">
                <div class="co">
                  <div>
                    <img src="./images/p1.png" alt="" class="less" />
                  </div>
                  <div class="bg-secondary good">
                    <a href="./course-videos.html">MS Office</a>
                    <p>Lecture 6</p>
                  </div>
                </div>
              </div>
            </div> */}

            <UserplaycourseLectures />


            {/* <div class="row">
              <div class="col-md-6 mb-3">
                <div class="co">
                  <div>
                    <img src="./images/p1.png" alt="" class="less" />
                  </div>
                  <div class="bg-secondary good">
                    <a href="./course-videos.html">MS Office</a>
                    <p>Lecture 7</p>
                  </div>
                </div>
              </div>
              <div class="col-md-6 mb-3">
                <div class="co">
                  <div>
                    <img src="./images/p1.png" alt="" class="less" />
                  </div>
                  <div class="bg-secondary good">
                    <a href="./course-videos.html">MS Office</a>
                    <p>Lecture 8</p>
                  </div>
                </div>
              </div>
            </div> */}

            <UserplaycourseLectures />


            {/* <div class="form-group text-center mt-3">
              <input type="submit" class="btn btn-success w-50 py-2" />
            </div> */}

            <Formbutton type='submit' classname='btn btn-success w-50 py-2 mt-3' value='Submit' href='' text='' />

          </div>
        </div>

      </section>

      <Footer />

    </>
  )
}
