import React from 'react'
import Searchbar from '../../components/searchbar';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import Comments from '../../components/comments';
import UserStructure from '../../components/userstructure';
// import UserButton from '../../components/userbutton';
import { Link } from 'react-router-dom'

export default function UserDashboard() {
  return (

    <>
      <Navbar />
      <Searchbar />


      <UserStructure >

        <tr>
          <h3 class="pt-3">MY PROFILE</h3>
        </tr>
        <tr>
          <td class="ps-2">Roll No</td>
          <td class="w">:</td>
          <td>1234</td>
        </tr>
        <tr>
          <td class="ps-2">Name</td>
          <td>:</td>
          <td>ABC</td>
        </tr>
        <tr>
          <td class="ps-2">Email</td>
          <td>:</td>
          <td>abc@gmail.com</td>
        </tr>
        <tr>
          <td class="ps-2">Gender</td>
          <td>:</td>
          <td>Male</td>
        </tr>
        <tr>
          <td class="ps-2">Mobile</td>
          <td>:</td>
          <td></td>
        </tr>
        <tr>
          <td class="ps-2">Address</td>
          <td>:</td>
          <td></td>
        </tr>
        <tr>
          <td class="ps-2">City</td>
          <td>:</td>
          <td></td>
        </tr>
        <tr>
          <td class="ps-2">Country</td>
          <td>:</td>
          <td></td>
        </tr>

        {/* <UserButton /> */}
      </UserStructure>

      < Footer />

    </>

  )
}
