import React from 'react'
import Searchbar from '../../components/searchbar';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import UserStructure from '../../components/userstructure';

export default function UserDashboardEdit() {
  return (
    <>
      <Navbar />
      <Searchbar />

      <UserStructure isStudent={true} btnvalue='Save' >

        <tr>
          <h3 class="pt-3">MY PROFILE</h3>
        </tr>
        <tr>
          <td class="ps-2">Roll No</td>
          <td>:</td>
          <td><input class="bg-light" type="text" placeholder="1234" readonly /></td>
        </tr>
        <tr>
          <td class="ps-2">Name</td>
          <td>:</td>
          <td><input type="text" value="abc" /></td>
        </tr>
        <tr>
          <td class="ps-2">Email</td>
          <td>:</td>
          <td><input type="text" value="abc@gmail.com" /></td>
        </tr>
        <tr>
          <td class="ps-2">Gender</td>
          <td>:</td>
          <td><select class="p-2 w-100">
            <option value="">male</option>
            <option value="">female</option>
          </select></td>
        </tr>
        <tr>
          <td class="ps-2">Mobile</td>
          <td>:</td>
          <td><input type="text" /></td>
        </tr>
        <tr>
          <td class="ps-2">Address</td>
          <td>:</td>
          <td><input type="text" /></td>
        </tr>
        <tr>
          <td class="ps-2">City</td>
          <td>:</td>
          <td><input type="text" /></td>
        </tr>
        <tr>
          <td class="ps-2">Country</td>
          <td>:</td>
          <td><select class="p-2 w-100">
            <option value="">USA</option>
            <option value="">CANADA</option>
          </select></td>
        </tr>


      </UserStructure>

      <Footer />
    </>
  )
}
