import './App.css';
import './index.css';

import {BrowserRouter, createBrowserRouter, RouterProvider} from "react-router-dom";

import Home from "./homepagefiles/Homepage";
import About from "./aboutpagefiles/About";
import Teams from "./teamspagefiles/Teamspage";
// import Resources from "./Resources";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Col, Row} from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import ForgeLogoHeader from "./photos/header Forge Logo.svg";
import Nav from "react-bootstrap/Nav";

const App = () => {

  const router = createBrowserRouter([
                                       {
                                         path: "/about",
                                         element: <About/>,
                                       },
                                       {
                                         path: "/teams",
                                         element: <Teams/>,
                                       },
                                       {
                                         path: "/home",
                                         element: <Home/>,
                                       },
                                       {
                                         path: "/",
                                         element: <Home/>,
                                       },
                                     ]);
  return (

      <div>
        <Row className="justify-content-center">
          <Col>
            <BrowserRouter>
              <Navbar expand="lg" className="bg-body-tertiary">
                <Container fluid>
                  <Navbar.Brand href="home"><img src={ForgeLogoHeader} className="small-svg"  alt={"SVG"}/></Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                  <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav>
                      <Nav.Link href="about">About Us</Nav.Link>
                      <Nav.Link href="teams">Teams</Nav.Link>
                      <Nav.Link href="resources">Resources</Nav.Link>
                      <Button
                          style={{backgroundColor: '#A36086', borderColor: '#A36086'}}
                          className="mx-5" href="get-involved">Get Involved</Button>
                    </Nav>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
            </BrowserRouter>
          </Col>
        </Row>
        <RouterProvider router={router}/>
      </div>
  );
}

export default App;