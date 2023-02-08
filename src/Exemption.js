import React from "react";
import ReactDOM from "react-dom";
import { ErrorMessage } from "@hookform/error-message";
import { useForm } from "react-hook-form";
import "bootstrap/dist/css/bootstrap.min.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
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


import "./Layout.css";

export  function Exemption() {
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm({
    criteriaMode: "all"
  });
  const onSubmit = (data) => console.log(data);

  return (
    <form>


    <MDBRow className='d-flex justify-content-center align-items-center h-10'>
      <MDBCol col='12' className='m-5'>




            <MDBRow>

              <MDBCol md='12' className=' bg-orange p-1'>

               
       
                <h5 className="fw-normal mb-5" style={{color: '#070322'}}>Exemption</h5>

                <MDBRow>

                  <MDBCol md='2'>
                    <MDBInput wrapperClass='mb-2' label='Exemption Year' size='lg' id='form1' type='number'/>
                  </MDBCol>
                  </MDBRow>

<MDBRow className=' bg-orange p-5'>
<MDBCol md='3' >
                 < MDBDropdown  name='Exemption Subject' wrapperClass='mb-4'>
                  <MDBDropdownToggle wrapperClass='mb-4'>Exemption Subject</MDBDropdownToggle>
                  <MDBDropdownMenu>
                  <MDBDropdownItem link>Arabic</MDBDropdownItem>
                  <MDBDropdownItem link> </MDBDropdownItem>
                  </MDBDropdownMenu>
                  </MDBDropdown></MDBCol>
              
                  <MDBCol md='3'>
                 < MDBDropdown  name='Reason' wrapperClass='mb-6'>
                  <MDBDropdownToggle wrapperClass='mb-6'>Reason</MDBDropdownToggle>
                  <MDBDropdownMenu>
                  <MDBDropdownItem link>Duoble Nationality</MDBDropdownItem>
                  <MDBDropdownItem link> </MDBDropdownItem>
                  </MDBDropdownMenu>
                  </MDBDropdown></MDBCol>



                  <MDBCol md='3'>
                 < MDBDropdown  name='Exemption Percentage' wrapperClass='mb-4'>
                  <MDBDropdownToggle wrapperClass='mb-4'>Exemption Percentage</MDBDropdownToggle>
                  <MDBDropdownMenu>
                  <MDBDropdownItem link>15%</MDBDropdownItem>
                  <MDBDropdownItem link> </MDBDropdownItem>
                  </MDBDropdownMenu>
                  </MDBDropdown></MDBCol>

<MDBCol md='3'>
                 < MDBDropdown  name='Exemption Status' wrapperClass='mb-4'>
                  <MDBDropdownToggle wrapperClass='mb-4'>Exemption Status</MDBDropdownToggle>
                  <MDBDropdownMenu>
                  <MDBDropdownItem link>Final</MDBDropdownItem>
                  <MDBDropdownItem link> </MDBDropdownItem>
                  </MDBDropdownMenu>
                  </MDBDropdown></MDBCol>

            
                </MDBRow>
              


              </MDBCol>


             
    </MDBRow>

    </MDBCol>


             
</MDBRow>
    </form>
  );
}

const rootElement = document.getElementById("root");
