import React from "react";


const contactus = () => {
    return (
       <div className="text-center">
                <img src="../assets/image/c1.jpg" class="d-block mx-auto mb-4" style={{width:"100%", height:"300px",margin:"10px",objectFit:"cover"}}></img>

    
    <div style={{padding: "20px" ,backgroundColor: "lightblue", textAlign: "center"}}>
        <h2>
            Contact Us
        </h2>
        <p>
            If you have any questions or comments, 
            please don't hesitate to contact us.
            
        </p>
        <ul>
            <li>Phone: 8866119742</li>
            <li>Email: aesha123@gmail.com</li>
            <li>
                Address: 
                <address>
                city:Vadodara , Gujarat
                </address>
            </li>
        </ul>
        <p>
            we will get back to you as soon as possible.
        </p>

    </div>
    </div> 
    );
  };
  
  export default contactus;