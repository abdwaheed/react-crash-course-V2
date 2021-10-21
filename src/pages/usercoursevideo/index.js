import React from 'react'
import Searchbar from '../../components/searchbar';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import CtitleDetails from '../../components/CtitleDetails';
import Iframe from '../../components/iframe';
import UserLongbutton from '../../components/userLongbutton';

export default function UserCourseVideo() {
  return (
    <>
      <Navbar />
      <Searchbar />


      <section class="course-video bg-white">
        <div class="video-container my-5">

          {/* <div class="ban2 text-center py-3">
            <h3 class="text-white">C++ PROGRAMMING LANGUAGE LESSON 01</h3>
          </div>

          <div class="ban2 py-3 px-4 text-white">
            <h3>In this lesson we learn about</h3>
            <ul>
              <li>intro to c++</li>
              <li>what is programming</li>
              <li>history of c++</li>
              <li>structure of c++</li>
            </ul>
          </div> */}

          <CtitleDetails />


          <div class="ban2 bg-white">
            {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/j8nAHeVKL08" title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen></iframe> */}

            <Iframe />

          </div>


          <div class="ban2 text-center py-3 mb-5">
            {/* <div class="video-quiz-btn">
              <a href="quiz.html"> <input type="submit" value="CLICK HERE TO TAKE QUIZ"
                class="btn text-white py-2 w-100 bg-secondary" /></a>
            </div> */}

            <UserLongbutton value='CLICK HERE TO START QUIZ' href='./userquiz' style={{ width: '90%', marginLeft: 'auto', marginRight: 'auto' }} />
          </div>


        </div>
      </section>


      <Footer />

    </>
  )
}
