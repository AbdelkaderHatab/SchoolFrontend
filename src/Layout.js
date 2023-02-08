

import './Home.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import React from 'react';

import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCheckbox,
 
  MDBInput,
 
}
from 'mdb-react-ui-kit';
import App from './App';





import { Outlet, Link } from "react-router-dom";
import './Layout.css'

const Layout = () => {
  return (

<MDBContainer fluid className='h-custom'>

<MDBRow className='d-flex justify-content-center align-items-center h-40'>
  <MDBCol col='12' className='m-1'>

   
    <h3 className="fw-normal mb-5" >Student Affairs MLS</h3>
    <MDBRow>

  <MDBCol md='2'>
<MDBInput wrapperClass='mb-2' label='Application Number' size='lg' id='form1' type='text'/>
</MDBCol>

<MDBCol md='2'>
<MDBInput wrapperClass='mb-2' label='Accademic Year' size='lg' id='form2' type='text'/>
</MDBCol>
<MDBCol md='2'>
<MDBInput wrapperClass='mb-2' label='Age At Addmision' size='lg' id='form1' type='text'/>
</MDBCol>

<MDBCol md='2'>
<MDBInput wrapperClass='mb-2' label='School' size='lg' id='form2' type='text'/>
</MDBCol>
<MDBCol md='2'>
<MDBInput wrapperClass='mb-2' label='Grade' size='lg' id='form1' type='text'/>
</MDBCol>

<MDBCol md='2'>
<MDBInput wrapperClass='mb-2' label='Level' size='lg' id='form2' type='text'/>
</MDBCol>
</MDBRow>
<MDBRow>
<MDBCol md='4'>
<MDBInput wrapperClass='mb-2' label='Student Name (A)' size='lg' id='form1' type='text'/>
</MDBCol>

<MDBCol md='4'>
<MDBInput wrapperClass='mb-2' label='Student Name (E)' size='lg' id='form2' type='text'/>
</MDBCol>
<MDBCol md='4'>
<MDBBtn  className='Register' size='lg'>Register </MDBBtn>
</MDBCol>
</MDBRow>

<nav className="topnav">
        <ul>
        <li>
            <Link  to="/StudentAffairs">Student Affairs</Link>
          </li>
          <li>
            <Link to="/Exemption">Exemption</Link>
          </li>
           <li>
            <Link to="/InclusionSpecialNeed">Inclusion & Special Need</Link>
          </li> 
         
          <li>
            <Link to="/Transfer">Transfer</Link>
          </li>
          <li>
            <Link to="/CheckList">Check List</Link>
          </li>

          <li>
            <Link  to="/EductionalHistory">Eductional History</Link>
          </li>
          <li>
            <Link to="/BusInformation">Bus Information</Link>
          </li>

        </ul>
      </nav>

      <Outlet />
      

  

  </MDBCol>
</MDBRow>

</MDBContainer>


    
 

  )
};

export default Layout;