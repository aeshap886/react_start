import React from "react";
import Course from "./Course";
import { useState } from "react";
import { Helmet } from "react-helmet";

const Allcourses = () => {
    const[courses, setCourses] = useState([
        {title:"Java Course", description:"Java is a demo course"},
        {title:"Python Course", description:"Python is a demo course"},
        {title:"React Course", description:"React is a demo course"},
    ]);
    return (
      <div>
        <Helmet>
        <title>All Courses</title>
        <meta name="description" content="Learn more home and our mission." />
        </Helmet>
        <h1 className="text-center">All Courses</h1>
        <p>List of courses are as follows</p>
        {
            courses.length>0  ?
            courses.map((item) => <Course course={item} />)
              :(
                "NO courses")}
            </div>  
    );
};

export default Allcourses;