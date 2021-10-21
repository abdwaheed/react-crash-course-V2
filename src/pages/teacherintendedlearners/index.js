import React from 'react'
import Navbar from '../../components/navbar'
import Searchbar from '../../components/searchbar'
import Footer from '../../components/footer'
import TeacherStructure from '../../components/TeacherStructure'
import { Link } from 'react-router-dom'

export default function TeacherIntendedLearners() {
  return (
    <>
      <Navbar />
      <Searchbar />

      <TeacherStructure>

        <div class="intended-learners my-5">

          <div class="dog d-flex justify-content-between overflow-hidden">
            <div>
              <h3 class="py-4 px-5">Intended Learners</h3>
            </div>

            <div class="mt-4"><button class="me-4 py-2"><Link to="./teacheruploadlecture"
              class="text-dark text-decoration-none">
              UPLOAD LECTURE</Link></button></div>
          </div>

          <p class="pt-4 pb-0 px-5 bold">What will students learn in this course?
          </p>
          <p class="px-5">Please enter the learning objectives or outcomes that learners can expect to achieve after
            completing
            your course.</p>

          <div class="intend-lrn-search mb-3">
            <input class="form-control py-3 ps-3" type="search"
              placeholder="Example: Define the roles and reponsibilities of a project manager" aria-label="Search" />
          </div>

          <div class="intend-lrn-search mb-3">
            <input class="form-control py-3 ps-3" type="search" placeholder="Example: Project timelines and budget"
              aria-label="Search" />
          </div>

          <div class="intend-lrn-search mb-3">
            <input class="form-control py-3 ps-3" type="search" placeholder="Example: Identify and manage project risks"
              aria-label="Search" />
          </div>

          <p class="pt-4 pb-0 px-5 bold">What are the requirements or prerequisites for taking your course?
          </p>
          <p class="px-5">List the required skills, experience, tools or equipment learners should have prior to taking your
            course.
            If there are no requirements, use this space as an opportunity to lower the barrier for beginners.</p>

          <div class="intend-lrn-search mb-3">
            <input class="form-control py-3 ps-3" type="search"
              placeholder="Example: No Programming experience needed. You will learn everythin you need."
              aria-label="Search" />
          </div>

          <p class="pt-4 pb-0 px-5 bold">Who is this course for?
          </p>
          <p class="px-5">Write a clear description of the intended learners for your course who will find your course
            content valuable.
            This will help you attract the right learners to your course.</p>

          <div class="intend-lrn-search mb-3">
            <input class="form-control py-3 ps-3" type="search"
              placeholder="Example:Beginners Python curious about data science" aria-label="Search" />
          </div>
          <div class="intend-lrn-search mb-5 py-3">
            <button class="btn btn-dark w-50 p-2" type="submit"><a class="text-decoration-none text-white"
              href="./intender-learners.html">Save</a></button>
          </div>

        </div>

      </TeacherStructure>

      <Footer />

    </>
  )
}
