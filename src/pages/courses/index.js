import React from 'react'
import Searchbar from '../../components/searchbar';
import Navbar from '../../components/navbar';
import CPageCard from '../../components/CPageCard';
import Comments from '../../components/comments';
import Footer from '../../components/footer';

export default function CoursesPage() {
  return (
    <>
      <Navbar />
      <Searchbar />


      {/* <!--   ---  BANNER COURES SECTION  ----    --> */}

      <section class="courses-list">
        <div class="text-center text-white btn-danger mt-5">
          <h2 class="mb-0 py-5">LIST OF ALL COURSES</h2>
        </div>
      </section>


      {/* <!--   ---  ALL COURSES COURSES SECTION  ----    --> */}

      <section class="available-courses">

        {/* <!-- <h2 class="text-center py-5">AVAILABLE COURSES</h2> --> */}

        <div class="courses py-5">

          <div class="row mt-5 pb-4">
            <div class="col-md-4 mb-4">
              {/* <div class="card co">
                <img src="./assets/images/avail1.png" class="card-img-top" alt="..." />
                <div class="card-body">
                  <a href="/popularcourse">
                    <h4 class="card-title pb-1">Internet Basic</h4>
                  </a>
                  <a href="/popularcourse" class="btn btn-primary">View Demo</a>
                </div>
              </div> */}

              <CPageCard img='./images/avail1.png' heading='Internet Basic' href='/popularcourse' />

            </div>

            <div class="col-md-4 mb-4">
              {/* <div class="card co">
                <img src="./assets/images/avail3.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                  <a href="/popularcourse">
                    <h4 class="card-title pb-1">Web Development</h4>
                  </a>
                  <a href="/popularcourse" class="btn btn-primary">View Demo</a>
                </div>
              </div> */}

              <CPageCard img='./images/avail3.jpg' heading='Web Development' href='/popularcourse' />
            </div>

            <div class="col-md-4 mb-4">
              {/* <div class="card co">
                <img src="./assets/images/avail2.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                  <a href="/popularcourse">
                    <h4 class="card-title pb-1">Python</h4>
                  </a>
                  <a href="/popularcourse" class="btn btn-primary">View Demo</a>
                </div>
              </div> */}

              <CPageCard img='./images/avail2.jpg' heading='Python' href='/popularcourse' />
            </div>


          </div>

          <div class="row pb-4">
            <div class="col-md-4 mb-4">
              {/* <div class="card co">
                <img src="./assets/images/avail4.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                  <a href="/popularcourse">
                    <h4 class="card-title pb-1">Javascript</h4>
                  </a>
                  <a href="/popularcourse" class="btn btn-primary">View Demo</a>
                </div>
              </div> */}

              <CPageCard img='./images/avail4.jpg' heading='Javascript' href='/popularcourse' />

            </div>


            <div class="col-md-4 mb-4">
              {/* <div class="card co">
                <img src="./assets/images/p1.png" class="card-img-top" alt="..." />
                <div class="card-body">
                  <a href="/popularcourse">
                    <h4 class="card-title pb-1">Office</h4>
                  </a>
                  <a href="/popularcourse" class="btn btn-primary">View Demo</a>
                </div>
              </div> */}

              <CPageCard img='./images/p1.png' heading='Office' href='/popularcourse' />

            </div>


            <div class="col-md-4 mb-4">
              {/* <div class="card co">
                <img src="./assets/images/p2.png" class="card-img-top" alt="..." />
                <div class="card-body">
                  <a href="/popularcourse">
                    <h4 class="card-title pb-1">Photoshop</h4>
                  </a>
                  <a href="/popularcourse" class="btn btn-primary">View Demo</a>
                </div>
              </div> */}

              <CPageCard img='./images/p2.png' heading='Photoshop' href='/popularcourse' />

            </div>

          </div>


          <div class="row pb-4">
            <div class="col-md-4 mb-4">
              {/* <div class="card co">
                <img src="./assets/images/p3.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                  <a href="/popularcourse">
                    <h4 class="card-title pb-1">Java</h4>
                  </a>
                  <a href="/popularcourse" class="btn btn-primary">View Demo</a>
                </div>
              </div> */}

              <CPageCard img='./images/p3.jpg' heading='Java' href='/popularcourse' />

            </div>

            <div class="col-md-4 mb-4">
              {/* <div class="card co">
                <img src="./assets/images/p4.png" class="card-img-top" alt="..." />
                <div class="card-body">
                  <a href="/popularcourse">
                    <h4 class="card-title pb-1">C++</h4>
                  </a>
                  <a href="/popularcourse" class="btn btn-primary">View Demo</a>
                </div>
              </div> */}

              <CPageCard img='./images/p4.png' heading='C++' href='/popularcourse' />

            </div>

            <div class="col-md-4">
              {/* <div class="card co">
                <img src="./assets/images/p5.png" class="card-img-top" alt="..." />
                <div class="card-body">
                  <a href="/popularcourse">
                    <h4 class="card-title pb-1">React</h4>
                  </a>
                  <a href="/popularcourse" class="btn btn-primary">View Demo</a>
                </div>
              </div> */}

              <CPageCard img='./images/p5.png' heading='React' href='/popularcourse' />

            </div>

          </div>

        </div>

      </section>



      {/* <!--   ---  COMMENTS  ----    --> */}

      {/* <section class="comments">
        <div class="comment-container">
          <div class="row">
            <div class="col-md-2">
              <img src="./images/bulb1.png" alt="" class="pt-5 px-3 w-90" />
            </div>

            <div class="col-md-4">
              <h4 class="pt-5 px-5">AN INVESTMENT IN KNOWLEDGE PAYS THE BEST INTEREST.</h4>
            </div>

            <div class="col-md-5">
              <img src="./images/user-comment.PNG" alt="" class="pt-5 px-3 w-100" />
            </div>

          </div>
        </div>
      </section> */}

      <Comments />



      {/*
      <footer class="page-footer font-small">


        <div class="container-fluid text-md-left py-5">


          <div class="footer">

            <div class="row">
              <div class="col-md-5 mb-md-0 mb-3 px-5">

                <h5 class="text-uppercase mb-4">GET IN TOUCH </h5>
                <p>Learn at the comfort of yourn own home!</p>
                <p>Phone: +92 336 326552 </p>
                <p>Email: whs@gmail.com</p>

              </div>




              <div class="col-md-3 mb-md-0 mb-3 px-5">


                <h5 class="text-uppercase mb-4">Top Courses</h5>

                <ul class="list-unstyled footer-middle text-primary">

                  <li>
                    <a href="courses.html">All Courses</a>
                  </li>
                  <li>
                    <a href="verification.html">Online Verification</a>
                  </li>
                  <li>
                    <a href="aboutus.html">About Us</a>
                  </li>
                  <li>
                    <a href="contactus.html">Contact Us</a>
                  </li>
                </ul>

              </div>


              <div class="col-md-3 mb-md-0 mb-3 px-5">
                <h5 class="text-uppercase mb-4">SOCIAL MEDIA</h5>

                <ul class="list-unstyled footer-last">
                  <li>
                    <a href="facebook.com">
                      <ion-icon name="logo-facebook"></ion-icon>
                    </a>
                  </li>

                  <li>
                    <a href="gmail.com">
                      <ion-icon name="logo-google"></ion-icon>
                    </a>
                  </li>
                  <li>
                    <a href="twitter.com">
                      <ion-icon name="logo-twitter"></ion-icon>
                    </a>
                  </li>
                </ul>

              </div>
            </div>
          </div>

        </div>


        <div class="footer-copyright text-center py-3 text-white">2021 © Copyright:
          <a href="index.html" class="text-warning"> All rights reserved</a>
        </div>

      </footer> */}

      <Footer />

    </>
  )
}
