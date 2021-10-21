import React from 'react'
import Searchbar from '../../components/searchbar';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import Comments from '../../components/comments';
import UserStructure from '../../components/userstructure';
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

// import { Link } from 'react-router-dom'

export default function UserSelectedCourses() {

  const location = useLocation()

  return (
    <>
      <Navbar />
      <Searchbar />

      <UserStructure isStudent={false}>

        <h3 class="p-3">SELECTED COURSES</h3>
        <div class="goo">
          <table>
            <thead>
              <tr>
                <th>NO</th>
                <th>Course Name</th>
                <th>View Lesson</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>React-Js And Node-Js Basics</td>
                <td><Link to="./userplaycourse"><input type="button" value="Play"
                  class="btn btn-success" /></Link> </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Basic Concepts of Object Oriented</td>
                <td><Link to="./userplaycourse"><input type="button" value="Play"
                  class="btn btn-success" /></Link> </td>
              </tr>
              <tr>
                <td>3</td>
                <td>C++ Programming Language and and its main fundamentals</td>
                <td><Link to="./userplaycourse"><input type="button" value="Play"
                  class="btn btn-success" /></Link> </td>
              </tr>
            </tbody>
          </table>
        </div>
      </UserStructure>

      <Footer />
    </>
  )
}
