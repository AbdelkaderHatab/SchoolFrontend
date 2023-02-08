import React, { useState } from "react";
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
  checkList
}

from 'mdb-react-ui-kit';


import "./Layout.css";

export  function StudentAffairs() {
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm({
    criteriaMode: "all"
  });
  const onSubmit = (data) => console.log(data);
const [data , SetData]=useState("");
/* useEffect(() => {
  // POST request using fetch inside useEffect React hook
  const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: 'React Hooks POST Request Example' })
  };
  fetch('https://reqres.in/api/posts', requestOptions)
      .then(response => response.json())
      .then(data => setPostId(data.id));

// empty dependency array means this effect will only run once (like componentDidMount in classes)
}, []); */
  return (
    <form onSubmit={handleSubmit(console.log)}>


    <MDBRow className='d-flex justify-content-center align-items-center h-10'>
      <MDBCol col='12' className='m-5'>




            <MDBRow>

              <MDBCol md='12' className=' bg-orange p-1'>

               
       
                <h5 className="fw-normal mb-5" style={{color: '#070322'}}>Student Affairs</h5>

                <MDBRow>

                  <MDBCol md='3'>
                    <MDBInput {...register("Application")} wrapperClass='mb-4' label='Application Number' size='lg' id='form1' type='number'/>
                  </MDBCol>

                  <MDBCol md='3'>
                    <MDBInput {...register("student")} wrapperClass='mb-4' label='Student Number' size='lg' id='form2' type='number'/>
                  </MDBCol>
                 
                  <MDBCol md='3'>
                    <MDBInput wrapperClass='mb-4' label='Student Name' size='lg' id='form2' type='text'/>
                  </MDBCol>
                

                  <MDBCol md='3'>
                  <MDBInput wrapperClass='mb-4' label='Student Email' size='lg' id='form1' type='text'/>
                  </MDBCol>
                  </MDBRow>


               
<MDBRow>

<MDBCol md='3'>
  <MDBInput wrapperClass='mb-4' label='Student Arabic Name' size='lg' id='form1' type='text'/>
</MDBCol>

<MDBCol md='3'>
  <MDBInput wrapperClass='mb-4' label='MLS Code' size='lg' id='form2' type='number'/>
</MDBCol>

<MDBCol md='3'>
  <MDBInput wrapperClass='mb-4' label='Electronic Id' size='lg' id='form2' type='number'/>
</MDBCol>


<MDBCol md='3'>
<MDBInput wrapperClass='mb-4' label='Gender' size='lg' id='form1' type='text'/>
</MDBCol>
</MDBRow>
<MDBRow>

<MDBCol md='3'>
  <MDBInput wrapperClass='mb-4' label='School ' size='lg' id='form1' type='text'/>
</MDBCol>

<MDBCol md='3'>
  <MDBInput wrapperClass='mb-4' label='Level' size='lg' id='form2' type='text'/>
</MDBCol>

<MDBCol md='3'>
  <MDBInput wrapperClass='mb-4' label='Grade' size='lg' id='form2' type='text'/>
</MDBCol>


<MDBCol md='3'>
<MDBInput wrapperClass='mb-4' label='Emergency Mobile' size='lg' id='form1' type='number'/>
</MDBCol>
</MDBRow>
<MDBRow>

<MDBCol md='3'>
  <MDBInput wrapperClass='mb-4' label='Student Status Date ' size='lg' id='form1' type='date'/>
</MDBCol>

<MDBCol md='3'>
  <MDBInput wrapperClass='mb-4' label='Entery Year' size='lg' id='form2' type='number'/>
</MDBCol>

<MDBCol md='3'>
  <MDBInput wrapperClass='mb-4' label='Document Opining Date' size='lg' id='form2' type='date'/>
</MDBCol>


<MDBCol md='3'>
<MDBInput wrapperClass='mb-4' label='Id Issuance' size='lg' id='form1' type='number'/>
</MDBCol>
</MDBRow>
<MDBRow>
<MDBCol md='3'>
<MDBInput wrapperClass='mb-4'  size='lg' id='form1' type='submit'/>
</MDBCol>
</MDBRow>       


              </MDBCol>


             
    </MDBRow>

    </MDBCol>


             
</MDBRow>

    </form>
  );
}


