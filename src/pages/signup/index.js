import React from 'react'
import Searchbar from '../../components/searchbar';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import Comments from '../../components/comments';
import Formstructure from '../../components/formstructure';
import Textbox from '../../components/textbox';
import Formbutton from '../../components/formbutton';

export default function SignUp({ title }) {
  return (
    <>
      <Navbar title={title} />
      <Searchbar />

      <section class="signin">
        <div class="container-fluid">
          {/* <!--error above line--> */}
          <div class="row">
            <div class="col-md-6 pt-3" styles="background-color: #1f4363;">
              <div class="left">
                <h1>REQUEST AN ADMISSION</h1>
                <h3 class="mt-5">HELP LINE <span class="mt-3">+92 434 43293423</span></h3>
              </div>
            </div>
            <div class="col-md-6" styles="background-color: #d1d3d4;">
              {/* <div class="form bg-light"> */}
              <Formstructure>
                <h1>ADMISSION</h1>
                <form>
                  {/* <div class="form-group mt-3">
                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Name" />
                  </div> */}

                  <Textbox type='text' placeholder='Name' />

                  {/* <div class="form-group mt-3">
                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Email" />
                  </div> */}

                  <Textbox type='email' placeholder='Email' />

                  {/* <div class="form-group mt-3">
                    <input type="password" class="form-control" id="exampleFormControlInput1" placeholder="Password" />
                  </div> */}


                  <Textbox type='password' placeholder='Password' />

                  {/* <div class="form-group mt-3">
                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Captcha Code" />
                  </div> */}


                  <Textbox type='text' placeholder='Captcha Code' />


                  {/* <div class="form-group text-center">
                    <input type="submit" value="Register Now" class="btn btn-success w-90 mb-1" /><br />
                    <a href="signin.html">Click Here To Login</a>

                  </div> */}

                  <Formbutton type='submit' classname=' btn btn-success w-90 mb-1' href='/signin' value='Register Now' text='Click Here To Login' />

                </form>
              </Formstructure>
              {/* </div> */}
            </div>

          </div>
        </div>
      </section>



      <Comments />
      <Footer />


    </>
  )
}
