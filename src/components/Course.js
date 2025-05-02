import React from "react";
import{
    Card,
    CardBody,
    CardTitle,
    CardText,
    CardSubtitle,
    CardFooter,
    Button,
    Container,
}from "reactstrap";
import { Helmet } from "react-helmet";

const Course = ({course}) => {
    return (
        
        <Card>
                
            <CardBody>
                   <Helmet key={window.location.pathname}>
                        <title>Course</title>
                        <meta property="og:title" content="Your Website Title" />
                        <meta property="og:description" content="A short description of your website." />
                        <meta property="og:image" content="E:\react\courses\public\assets\image\image.png" />
                        <meta property="og:url" content="https://yourdomain.com" />
                        <meta property="og:type" content="website" />

                        <meta name="keywords" content="Learn more home and our mission." />
                    </Helmet>
                <CardSubtitle  className="font-weight-bold text-center">
                {course.title}
                </CardSubtitle>
                <CardText className="text-center">
                {course.description}
                </CardText>
                <Container className="text-center ">
        <Button color="danger">Delete</Button>
        <Button color="warning mx-3">Update</Button>
        </Container>
            </CardBody>
        </Card>
    )

}

export default Course;