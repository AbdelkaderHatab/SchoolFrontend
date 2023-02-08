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

export  function BusInformation() {
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
      <MDBCol col='12' className='m-1'>




            <MDBRow>

              <MDBCol md='12' className=' bg-orange p-5'>

               
       
                <h5 className="fw-normal mb-5" style={{color: '#070322'}}>Bus Information</h5>

                <MDBRow>

                  <MDBCol md='6'>
                    <MDBInput wrapperClass='mb-4' label='Bus Registration Number' size='lg' id='form1' type='text'/>
                  </MDBCol>

                  <MDBCol md='6'>
                    <MDBInput wrapperClass='mb-4' label='Bus Registration Date' size='lg' id='form2' type='text'/>
                  </MDBCol>
                  </MDBRow>

                  <MDBRow>
                  <MDBCol md='6'>
                    <MDBInput wrapperClass='mb-4' label='Bus Address' size='lg' id='form2' type='text'/>
                  </MDBCol>
                

                  <MDBCol md='6'>
                  <MDBInput wrapperClass='mb-4' label='Bus Number' size='lg' id='form1' type='text'/>
                  </MDBCol>
                  </MDBRow>

<MDBRow>
                  <MDBCol md='6'>
                  <MDBInput wrapperClass='mb-4' label='Bus Zone' size='lg' id='form2' type='text'/>
                  </MDBCol>

                 <MDBCol md='6'>
                 < MDBDropdown  name='Bus Type' wrapperClass='mb-4'>
                  <MDBDropdownToggle wrapperClass='mb-4'>Bus Type</MDBDropdownToggle>
                  <MDBDropdownMenu>
                  <MDBDropdownItem link>No Bus</MDBDropdownItem>
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
