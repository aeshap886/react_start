import React  from "react";
import {Jumbotron, Container, Button} from "reactstrap";
import {Helmet} from "react-helmet";

const Home = () => {
    return (
        
        <div className="text-center">
        <img src="../assets/image/home.webp" class="card-img-top " style={{width:"50%", height:"50%"}}></img>  

            <jumbotron className= "text-center">
            <Helmet key={window.location.pathname}>
    <title> Welcome to Home</title>
        <meta name="keywords" content="Learn more home and our mission." />

    </Helmet>

                <h1>Learncodewith Aesha</h1>
                
                <p>
                    This is developed by Learncodewith Aesha for learning purpose
                    backend is on spring boot and frontend on react js
                </p>
                <Container>
                    <Button color="primary" outline> 
                        Start Using
                        </Button>
                </Container>
                </jumbotron>
        </div>

    );
};

export default Home;