import React from "react";
import './Nav.css'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {StudentAffairs} from "./StudentAffairs";
import {Exemption} from "./Exemption";
import {InclusionSpecialNeed} from "./InclusionSpecialNeed";
import {Transfer} from './Transfer';
import {CheckList} from "./CheckList";
import {EducationalHistory} from "./EductionalHistory";
import {BusInformation} from './BusInformation';
import Layout from "./Layout";

export function Nav() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="StudentAffairs" element={<StudentAffairs />} />
            <Route path="Exemption" element={<Exemption />} />
            <Route path="InclusionSpecialNeed" element={<InclusionSpecialNeed />} />
            <Route path="Transfer" element={<Transfer />} />
             <Route path="CheckList" element={<CheckList />} /> 
             <Route path="EductionalHistory" element={<EducationalHistory />} /> 
             <Route path="BusInformation" element={<BusInformation />} /> 

          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
  
  