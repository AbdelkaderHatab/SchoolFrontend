
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
 export function Home  () {   return (
  <form onSubmit={handleSubmit(onSubmit)}>
  <MDBContainer fluid className='h-custom'>

    <MDBRow className='d-flex justify-content-center align-items-center h-40'>
      <MDBCol col='12' className='m-1'>

       
        <h3 className="fw-normal mb-5" style >Student Affairs MLS</h3>
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
<MDBInput  type='submit' className='delete' size='lg'> submit</MDBInput>
</MDBCol>
</MDBRow>

    
          

      

      </MDBCol>
    </MDBRow>

  </MDBContainer>

</form>

);}



