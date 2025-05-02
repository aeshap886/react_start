import React, { Fragment } from 'react';
import { Button, Container, Form, FormGroup, Input } from 'reactstrap';
import {Helmet} from "react-helmet";
const AddCourses=()=>{
    return (
        
    <Fragment >
        <Helmet>
            <title>AddCourses</title>
            <meta name="description" content="Learn more home and our mission." />
            <meta property="og:image" content="" />
                        <meta property="og:image" content="/assets/image/f2.jpg" />
                        <meta property="og:image:width" content="1200" />
                        <meta property="og:image:height" content="630" />
                        <meta property="og:url" content="https://dreamy-bavarois-72052a.netlify.app/" />
            <meta name ="author" content="Aesha" /> 
            </Helmet>
           
            <Container className="px-0">
            <img src="../assets/image/f2.jpg" alt='Course Banner'
            className="d-block mx-auto mb-4" style={{width:"100%", height:"300px",objectFit:"cover",margin:"10px"}}></img>
        <h1 className="text-center mb-4"  style={{color:"#333"}}> 
            Fill Course Detail
            </h1>
        <Form  className="p-4 rounded shadow-smt" 
        style={{ background:"#e3f2fd ", maxwidth:"600px", margin:"0 auto"}}>   
            <FormGroup>
                <label>Course Id</label>
                <Input type="text" 
                placeholder="Enter here"
                name="userId"
                id="userId"
                />
            </FormGroup>
            <FormGroup>
                <label for="title">Course title</label>
                <Input type="text" placeholder="Enter title here" id="title"/>
            </FormGroup>
            <FormGroup>
                <label for="description">Course Description</label>
                <Input 
                type="textarea"
                placeholder="Enter description here"
                id="description"
                style={{height:70}}
                />
            </FormGroup>
            <Container className="text-center">
            <Button color="success">Add Course</Button> 
                <Button color="warning mx-3">Clear</Button>
            </Container>
        </Form>
        
    </Container>

    </Fragment>
    
    
    );
};

export default AddCourses;
