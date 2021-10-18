import React from 'react'
import Searchbar from '../../components/searchbar';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import Comments from '../../components/comments';
import Formstructure from '../../components/formstructure';
import Textbox from '../../components/textbox';
import Formbutton from '../../components/formbutton';
import { Link } from 'react-router-dom'

export default function SignIn({ title }) {
  return (
    <>
      <Navbar title={title} />
      <Searchbar />

      <section class="signin">
        <div class="container-fluid">
          {/* <!-- error above line--> */}
          <div class="row">
            <div class="col-md-6 pt-3" styles="background-color: #1f4363;">
              <div class="left">
                <h1>LOGIN YOUR ACCOUNT</h1>
                <h3 class="mt-5">HELP LINE <span class="mt-3">+92 434 43293423</span></h3>
              </div>
            </div>

            <div class="col-md-6 " styles="background-color: #d1d3d4;">
              {/* <div class ="form bg-light"> */}

              <Formstructure>
                <h1>LOGIN</h1>
                <form>
                  {/* <div class="form-group mt-3">
                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Email" />
                  </div> */}

                  <Textbox type='email' placeholder='Email' />


                  {/* <div class="form-group mt-3">
                    <input type="password" class="form-control" id="exampleFormControlInput1" placeholder="Password" />
                  </div> */}

                  <Textbox type='password' placeholder='Password' />


                  {/* <!-- <div class="form-group mt-3">
                    <input type="password" class="form-control" id="exampleFormControlInput1" placeholder="Password">
                  </div>

                  <div class="form-group mt-3">
                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Captcha Code">
                  </div> --> */}

                  {/* <div class="form-group text-center">
                    <a href="./user-portal/dashboard.html"> <input type="button" value="Login"
                      class="btn login-btn w-70 mb-1 text-white" /></a><br />
                    <a href="forgot-password.html">Forgot Password</a>

                  </div> */}

                  <Formbutton type='button' value='Login' classname='btn login-btn w-70 mb-1 text-white' href='/forgotpassword' text='Forgot Password' />

                </form>
              </Formstructure>
              {/* </div> */}
            </div>

            {/* <!--
            <div class="col-md-6">
              <div class="right">
                <div class="form-signin">

                  <form>
                    <div class="form-group mt-3">

                      <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Email">
                    </div>


                    <div class="form-group mt-3">

                      <input type="password" class="form-control" id="exampleFormControlInput1" placeholder="Password">
                    </div>

                    <div class="form-group mt-3">

                      <a href="./user-portal/dashboard.html"><input type="button" value="Login"
                        class="btn btn-success form-control"></a>
                    </div>

                    <div class="form-group mt-3">


                      <a href="forgot-password.html">Forgot Password</a>
                      <a href="signup.html">Create New Account</a>

                    </div>

                  </form>
                </div>
              </div>

            </div> --> */}

          </div>
        </div>
      </section>

      <Comments />
      <Footer />

    </>
  )
}
