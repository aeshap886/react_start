import logo from './logo.svg';
import './App.css';
import { Button, Container,Row,Col, Toast } from  'reactstrap';
import Header from './components/Header';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import Home from './components/Home';
import Course from './components/Course';
import Allcourses from './components/Allcourses';
import AddCourses from './components/AddCourses';
import News from './components/News';
import contactus from './components/contactus';
import Menus from './components/Menus';
import Navigation from './components/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
function App() {

  const btnHandle= () => {
    toast.error("done",{
      position: "top-center",
    });
  };

  return (
  <div>
    <Router>
    <ToastContainer/>
   <Container>
    <Header/>
    
     <Navigation/>
     
      <Routes>
      <Route path="/" Component={Home}  exact/>
      <Route path="/add-course" Component={AddCourses} exact />
      <Route path="/view-courses" Component={Allcourses} exact />
      <Route path="/news" Component={News} exact />
     <Route path="/contactus" Component={contactus} exact />
      </Routes>
     
    
   </Container>

    </Router>
     </div>
  ) ;
  }
  export default App;
