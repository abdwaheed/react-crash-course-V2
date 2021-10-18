import React from 'react'
import Searchbar from '../../components/searchbar';
import Navbar from '../../components/navbar';
import Homedesign from '../../components/homedesign';
import Textbox from '../../components/textbox';
import Formbutton from '../../components/formbutton';
import Formstructure from '../../components/formstructure';
import PcourseImages from '../../components/PcourseImages';
import AcourseCard from '../../components/AcourseCard';
import Footer from '../../components/footer';
import Comments from '../../components/comments';

export default function MainPage() {


  return (
    <>
      <Navbar />
      <Searchbar />

      {/*
      <!-- <div className="bg-secondary below-nav">
        <div className="container-top-bar">
          <div className="row">
            <div className="col-md-6 aaaa pt-0 font-italic">
              <h6 className="mb-0 pt-2 text-white">"LEARN AT THE COMFORT OF YOUR OWN HOME"</h6>
            </div>

            <div className="col-md-6">

              <div className="dog">
                <li className="my-1 mx-1"><a href="signin.html"><input type="button" className="btn-success" value="login" /></a></li>
                <li className="my-1"><a href="signup.html"><input type="button" className="btn-danger" value="sigup" /></a></li>
              </div>

            </div>
          </div>
        </div>
      </div> --> */}

      {/*
      <div className="container-fluid  below-nav">
        <form className="search d-flex py-3">
          <input className="form-control me-2" type="search" placeholder="Search Course" aria-label="Search" />
          <button className="btn btn-danger" type="submit">Search</button>
        </form>
      </div> */}




      {/* <!--   ---  HOME PAGE FORM  ----    --> */}

      <div className="home">

        <div className="container">

          <div className="row">

            <div className="col-md-7">
              <div className="grand_parent">
                <h2 className="text-center mb-5"> Welcome To E- Learning</h2>

                <div className="container">
                  <Homedesign one='159' two='Total' three='Users' four='Users' />
                  {/* <div className="abc">

                    <div className="hi mx-2">
                      <main>
                        <span className="div1 bg-primary justify-content-center pt-3 text-center">159</span>
                        <span className="div1 bg-secondary justify-content-center text-center">Users</span>
                      </main>
                    </div>

                    <div className="total-user  mx-2 mt-4">
                      <a href="#" className="text-decoration-none">
                        <span>
                          <h5 className="my-3">Total</h5>
                        </span>
                      </a>
                      <span>Users</span>
                    </div>
                  </div> */}

                  {/* <div className="abc">

                    <div className="hi mx-2">
                      <main>
                        <span className="div1 bg-primary justify-content-center pt-3 text-center">102</span>
                        <span className="div1 bg-secondary justify-content-center text-center">Users</span>
                      </main>
                    </div>

                    <div className="total-user  mx-2 mt-4">
                      <a href="#" className="text-decoration-none">
                        <span>
                          <h5 className="my-3">Active</h5>
                        </span>
                      </a>
                      <span>Users</span>

                    </div>
                  </div> */}
                  <Homedesign one='102' two='Active' three='Users' four='Users' />

                </div>



                <div className="container">

                  {/* <div className="abc mt-5">

                    <div className="hi mx-2">
                      <main>
                        <span className="div1 bg-primary justify-content-center pt-3 text-center">25</span>
                        <span className="div1 bg-secondary justify-content-center text-center">Courses</span>
                      </main>
                    </div>
                    <div className="total-user  mx-2 mt-4">
                      <a href="#" className="text-decoration-none">
                        <span>
                          <h5 className="my-3">Total</h5>
                        </span>
                      </a>
                      <span>Course</span>
                    </div>
                  </div> */}

                  <Homedesign one='25' two='Courses' three='Total' four='Course' />

                  {/*
                  <div className="abc mt-5">

                    <div className="hi mx-2">
                      <main>
                        <span className="div1 bg-primary justify-content-center pt-3 text-center">55</span>
                        <span className="div1 bg-secondary justify-content-center text-center">Users</span>
                      </main>
                    </div>

                    <div className="total-user  mx-2 mt-4">
                      <a href="#" className="text-decoration-none">
                        <span>
                          <h5 className="my-3">Grad</h5>
                        </span>
                      </a>
                      <span>Users</span>

                    </div>
                  </div> */}
                  <Homedesign one='55' two='Users' three='Grad' four='Users' />

                </div>


              </div>
            </div>

            <div className="col-md-5">
              {/* <div className="form bg-light"> */}
              <Formstructure>

                <h1>ADMISSION</h1>
                <form>
                  {/* <div className="form-group mt-3">
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Name" />
                  </div> */}

                  <Textbox type='text' placeholder='Name' />


                  {/* <div className="form-group mt-3">
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Email" />
                  </div> */}

                  <Textbox type='email' placeholder='Email' />


                  {/* <div className="form-group mt-3">
                    <input type="password" className="form-control" id="exampleFormControlInput1" placeholder="Password" />
                  </div> */}

                  <Textbox type='password' placeholder='Password' />


                  {/* <div className="form-group mt-3">
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Captcha Code" />
                  </div> */}

                  <Textbox type='text' placeholder='Captcha Code' />



                  {/* <div className="form-group text-center">
                    <input type="submit" className="btn btn-success w-100 mb-1" />
                    <a href="signin.html">Click Here To Login</a>

                  </div> */}

                  <Formbutton type='submit' classname='btn btn-success w-100 mb-1' href='/signin' text='Click Here To Login' />

                </form>
              </Formstructure>

              {/* </div> */}
            </div>

          </div>

        </div>
      </div>


      {/* <!--   ---  POPULAR COURES SECTION  ----    --> */}

      <section className="popular-courses">

        <div className="pics-container">

          <h2 className="text-center my-5">POPULAR <span className="word-color">COURSES</span></h2>

          <div className="container">
            <div className="row">
              {/* <div className="col-md-3">
                <figure className="course-pic">
                  <a href="popular-course.html"> <img src="/images/p1.png" alt="" /> </a>
                </figure>
              </div> */}
              <PcourseImages href='/popularcourse' src='/images/p1.png' />

              {/* <div className="col-md-3">
                <figure className="course-pic">
                  <a href="popular-course.html"> <img src="/images/p2.png" alt="" /> </a>
                </figure>
              </div> */}

              <PcourseImages href='/popularcourse' src='/images/p2.png' />


              {/* <div className="col-md-3">
                <figure className="course-pic">
                  <a href="popular-course.html"> <img src="/images/p3.jpg" alt="" /> </a>
                </figure>
              </div> */}

              <PcourseImages href='/popularcourse' src='/images/p3.jpg' />


              {/* <div className="col-md-3">
                <figure className="course-pic">
                  <a href="popular-course.html"> <img src="/images/p4.png" alt="" /> </a>
                </figure>
              </div> */}

              <PcourseImages href='/popularcourse' src='/images/p4.png' />

            </div>
          </div>
        </div>
      </section>


      {/* <!--   ---  AVAILABLE COURSES SECTION  ----    --> */}

      <section className="available-courses">

        <h2 className="text-center py-5">AVAILABLE <span className="word-color">COURSES</span></h2>

        <div className="courses">

          <div className="row pb-5">
            <div className="col-md-6 mb-4">
              {/* <div className="card co">
                <img src="/images/avail1.png" className="card-img-top" alt="..." />
                <div className="card-body">
                  <a href="popular-course.html">
                    <h4 className="card-title pb-1">Internet Basic</h4>
                  </a>

                  <p className="card-text">Classes started from coming friday(21 jun 2017)
                  </p>
                  <a href="popular-course.html" className="btn btn-primary">View Demo</a>
                  <a href="signup.html" className="btn btn-light border-dark">Registration</a>
                </div>
              </div> */}
              <AcourseCard img='/images/avail1.png' href='/popularcourse' heading='Internet Basic' />

            </div>


            <div className="col-md-6 mb-4">
              {/* <div className="card co">
                <img src="/images/avail3.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <a href="popular-course.html">
                    <h4 className="card-title pb-1">Web Development</h4>
                  </a>

                  <p className="card-text">Classes started from coming friday(21 jun 2017)
                  </p>
                  <a href="popular-course.html" className="btn btn-primary">View Demo</a>
                  <a href="signup.html" className="btn btn-light border-dark">Registration</a>
                </div>
              </div> */}

              <AcourseCard img='/images/avail3.jpg' href='/popularcourse' heading='Web Development' />

            </div>

          </div>



          <div className="row pb-5">
            <div className="col-md-6 mb-4">
              {/* <div className="card co">
                <img src="/images/avail2.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <a href="popular-course.html">
                    <h4 className="card-title pb-1">Python</h4>
                  </a>

                  <p className="card-text">Classes started from coming friday(21 jun 2017)
                  </p>
                  <a href="popular-course.html" className="btn btn-primary">View Demo</a>
                  <a href="signup.html" className="btn btn-light border-dark">Registration</a>
                </div>
              </div> */}
              <AcourseCard img='/images/avail2.jpg' href='/popularcourse' heading='Python' />
            </div>


            <div className="col-md-6 mb-5">
              {/* <div className="card co">
                <img src="/images/avail4.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <a href="popular-course.html">
                    <h4 className="card-title pb-1">JavaScript</h4>
                  </a>

              <p className="card-text">Classes started from coming friday(21 jun 2017)
              </p>
              <a href="popular-course.html" className="btn btn-primary">View Demo</a>
              <a href="signup.html" className="btn btn-light border-dark">Registration</a>

            </div>
          </div> */}
              <AcourseCard img='/images/avail4.jpg' href='/popularcourse' heading='Javascript' />
            </div>

          </div>

        </div>

      </section >



      {/* <!--   ---  COMMENTS  ----    --> */}

      {/* < section className="comments" >
        <div className="comment-container">
          <div className="row">
            <div className="col-md-2">
              <img src="/images/bulb1.png" alt="" className="pt-5 px-3 w-90" />
            </div>

            <div className="col-md-4">
              <h4 className="pt-5 px-5">AN INVESTMENT IN KNOWLEDGE PAYS THE BEST INTEREST.</h4>
            </div>

            <div className="col-md-5">
              <img src="/images/user-comment.PNG" alt="" className="pt-5 px-3 w-100" />
            </div>

          </div>
        </div>
      </section > */}

      <Comments />


      {/* <!---  FOOTER  ---> */}


      {/* < footer className="page-footer font-small" >


        <div className="container-fluid text-md-left py-5">


          <div className="footer">

            <div className="row">
              <div className="col-md-5 mb-md-0 mb-3 px-5">

                <h5 className="text-uppercase mb-4">GET IN TOUCH </h5>
                <p>Learn at the comfort of yourn own home!</p>
                <p>Phone: +92 336 326552 </p>
                <p>Email: whs@gmail.com</p>

              </div>




              <div className="col-md-3 mb-md-0 mb-3 px-5">


                <h5 className="text-uppercase mb-4">Top Courses</h5>

                <ul className="list-unstyled footer-middle text-primary">

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


              <div className="col-md-3 mb-md-0 mb-3 px-5">
                <h5 className="text-uppercase mb-4">SOCIAL MEDIA</h5>

                <ul className="list-unstyled footer-last">
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


        <div className="footer-copyright text-center py-3 text-white">2021 © Copyright:
          <a href="index.html" className="text-warning"> All rights reserved</a>
        </div>

      </footer > */}
      <Footer />





    </>
  )
}
