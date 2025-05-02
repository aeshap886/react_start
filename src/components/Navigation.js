import React from "react";
import { Link } from "react-router-dom";


import {
  Navbar,
  Nav,
  NavItem,
  NavLink,
  Container,
  NavDropdown, 
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarBrand,
  NavbarToggler,
  Collapse
} from "reactstrap";

const Navigation = () =>{
    return(
    
<div class="card text-center">
  <div class="card-header">
    <ul class="nav nav-pills card-header-pills">
      <li class="nav-item">
        <a class="nav-link active" href="/">home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/add-course">AddCourses</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/view-courses">ViewCourses</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/contactus">ContactUs</a>
      </li>
    </ul>
  </div>

    </div>
    );
};

export default Navigation;