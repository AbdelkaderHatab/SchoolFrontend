
import './Register.css';
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
  MDBDropdown,
  MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem,
  
}
from 'mdb-react-ui-kit';
import App from './App';
 export function Register  () {   return (
  <MDBContainer fluid className='h-custom'>

    <MDBRow className='d-flex justify-content-center align-items-center h-100'>
      <MDBCol col='12' className='m-5'>

        <MDBCard className='card-registration card-registration-2' style={{borderRadius: '15px'}}>



          <MDBCardBody className='p-0'>
            <MDBRow>

              <MDBCol md='6' className=' bg-orange p-5'>

               
       
                <h5 className="fw-normal mb-5" style={{color: '#070322'}}>New Admition (Basic Information)</h5>

                <MDBRow>

                  <MDBCol md='6'>
                    <MDBInput wrapperClass='mb-4' label='First Name' size='lg' id='form1' type='text'/>
                  </MDBCol>

                  <MDBCol md='6'>
                    <MDBInput wrapperClass='mb-4' label='Last Name' size='lg' id='form2' type='text'/>
                  </MDBCol>

                </MDBRow>

                <MDBRow>

  
<MDBCol md='6'>
  
<MDBDropdown  name='MDBDropdown' wrapperClass='mb-4'>
      <MDBDropdownToggle>Gender</MDBDropdownToggle>
      <MDBDropdownMenu>
        <MDBDropdownItem link>Male</MDBDropdownItem>
        <MDBDropdownItem link>Female</MDBDropdownItem>
      </MDBDropdownMenu>
    </MDBDropdown>
</MDBCol>

<MDBCol md='6'>
  <MDBInput wrapperClass='mb-4' label='Entery Year' size='date' id='form6' type='text'/>
</MDBCol>

</MDBRow>
                <MDBInput wrapperClass='mb-4' label='Registeration Number' size='lg' id='form3' type='text'/>

                <MDBRow>

                  <MDBCol md='6'>
                    <MDBInput wrapperClass='mb-4' label='Nationality' size='lg' id='form4' type='text'/>
                  </MDBCol>
                  
                  <MDBCol md='6'>
                    <MDBInput wrapperClass='mb-4' label='National Id' size='lg' id='form7' type='text'/>
                  </MDBCol>

                </MDBRow>
                <MDBRow>

<MDBCol md='6'>
  <MDBInput wrapperClass='mb-4' label='Place Of Birth' size='lg' id='form5' type='text'/>
</MDBCol>

<MDBCol md='6'>
  <MDBInput wrapperClass='mb-4' label='Date Of Birth' size='date' id='form6' type='date'/>
</MDBCol>

</MDBRow>
              </MDBCol>


              <MDBCol md='6' className='bg-indigo p-5'>

                <h3 className="fw-normal mb-5 text-white" style={{color: '#4835d4'}}>Contact Details</h3>
                <MDBInput wrapperClass='mb-4' labelClass='text-white' label='Street + Nr' size='lg' id='form5' type='text'/>
                <MDBInput wrapperClass='mb-4' labelClass='text-white' label='Additional Information' size='lg' id='form6' type='text'/>

                <MDBRow>

                  <MDBCol md='5'>
                    <MDBInput wrapperClass='mb-4' labelClass='text-white' label='Zip Code' size='lg' id='form6' type='text'/>
                  </MDBCol>

                  <MDBCol md='7'>
                    <MDBInput wrapperClass='mb-4' labelClass='text-white' label='Place' size='lg' id='form7' type='text'/>
                  </MDBCol>

                </MDBRow>

                <MDBInput wrapperClass='mb-4' labelClass='text-white' label='Country' size='lg' id='form8' type='text'/>

                <MDBRow>

                  <MDBCol md='5'>
                    <MDBInput wrapperClass='mb-4' labelClass='text-white' label='Code +' size='lg' id='form9' type='text'/>
                  </MDBCol>

                  <MDBCol md='7'>
                    <MDBInput wrapperClass='mb-4' labelClass='text-white' label='Phone Number' size='lg' id='form10' type='text'/>
                  </MDBCol>
                </MDBRow>

                <MDBInput wrapperClass='mb-4' labelClass='text-white' label='Your Email' size='lg' id='form8' type='email'/>
                <MDBCheckbox name='flexCheck' id='flexCheckDefault' labelClass='text-white mb-4' label='I do accept the Terms and Conditions of your site.' />
                <MDBBtn color='light' size='lg'>Register</MDBBtn>

              </MDBCol>
            </MDBRow>

          </MDBCardBody>

        </MDBCard>

      </MDBCol>
    </MDBRow>

  </MDBContainer>
);}



