
import './Test.css';
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
  MDBCardBody,
  MDBInput,
  MDBRadio,
}
from 'mdb-react-ui-kit';
import App from './App';

 export function Test  () {   return (
  <MDBContainer fluid className='h-custom'>

    <MDBRow className='d-flex justify-content-center align-items-center h-30'>
      <MDBCol col='12' className='m-5'>

        <MDBCard className='card-registration card-registration-2' style={{borderRadius: '15px'}}>
        <h3 className="fw-normal mb-5" style={{color: '#070322'}}>Test</h3>


        <MDBRow className='space'>

<MDBCol md='2'>
  <MDBInput wrapperClass='mb-2' label='Test Score' size='lg' id='form1' type='text'/>
</MDBCol>

<MDBCol md='2'>
  <MDBInput wrapperClass='mb-2' label='Math Score' size='lg' id='form2' type='text'/>
</MDBCol>
<MDBCol md='2'>

  <MDBInput wrapperClass='mb-2' label='English Score' size='lg' id='form1' type='text'/>
</MDBCol>
</MDBRow>
<MDBRow className='space'>
<MDBCol md='2'>

  <MDBInput wrapperClass='mb-2' label='Test Date' size='lg' id='form2' type='text'/>
</MDBCol>
</MDBRow>
<MDBRow className='space'>
<MDBCol md='6'>

  <MDBInput wrapperClass='mb-2' label='Comment' size='lg' id='form2' type='text'/>
</MDBCol>

</MDBRow>
<MDBRow className='space'>
<MDBCol md='2'>

  <MDBInput wrapperClass='mb-2' label='Accepts' size='lg' id='form2' type='text'/>
</MDBCol>

</MDBRow>
<MDBRow className='space'>
<MDBCol md='4'>
  <MDBInput wrapperClass='mb-4' label='COF' size='lg' id='form2' type='text'/>
</MDBCol>

</MDBRow>
   
          

        </MDBCard>

      </MDBCol>
    </MDBRow>

  </MDBContainer>
);}



