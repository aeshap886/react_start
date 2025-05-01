import React from "react";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem } from "reactstrap";
const Menus= () => {
    return(
        <ListGroup>
            <Link className="list-group-item list-group-item-action"
            tag="a"
            to="/"
            action
            >
                Home
            </Link>
                <Link  className="list-group-item list-group-item-action"
                tag="a"
                to="/add-course" 
                action
                >
                    AddCourses
                </Link>
                <Link className="list-group-item list-group-item-action" 
                tag="a"
                to="/view-courses" 
                action
                >
                    View courses
                </Link>
                <Link className="list-group-item list-group-item-action"
                tag="a" 
                to="/news" 
                action>
                    News
                </Link>
                <Link className="list-group-item list-group-item-action" 
                tag="a" 
                to="/contactus" 
                action>
                    Contactus
                </Link>
                </ListGroup>

    );
};

export default Menus;