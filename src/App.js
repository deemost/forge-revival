import './App.css';
import './index.css';

import {BrowserRouter, createBrowserRouter, RouterProvider} from "react-router-dom";

import Home from "./homepagefiles/Homepage";
import About from "./aboutpagefiles/About";
import Teams from "./teamspagefiles/Teamspage";
import PastProjects from "./pastprojectsfiles/PastProjects";
// import Resources from "./Resources";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Col, Row} from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import ForgeLogoHeader from "./photos/header Forge Logo.svg";
import Nav from "react-bootstrap/Nav";
import ig from "./photos/insta logo.svg";
import lin from "./photos/linkedin logo.svg";
import ml from "./photos/Email icon.svg";

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
                                               path: "/past-projects",
                                               element: <PastProjects/>,
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

        <div className='gradient' >
            <Row className="justify-content-center">
                <Col>
                    <BrowserRouter>
                        <Navbar expand="lg" className="bg-body-tertiary">
                            <Container fluid>
                                <Navbar.Brand href="home"><img src={ForgeLogoHeader}
                                                               className="small-svg"
                                                               alt={"SVG"}/></Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                                <Navbar.Collapse id="basic-navbar-nav"
                                                 className="justify-content-end">
                                    <Nav>
                                        <Nav.Link href="about">About Us</Nav.Link>
                                        <Nav.Link href="teams">Teams</Nav.Link>
                                        <Nav.Link href="past-projects">Past Projects</Nav.Link>
                                        <Button
                                            style={{
                                                backgroundColor: '#A36086',
                                                borderColor: '#A36086'
                                            }}
                                            className="mx-5" href="get-involved">Get
                                            Involved</Button>
                                    </Nav>
                                </Navbar.Collapse>
                            </Container>
                        </Navbar>
                    </BrowserRouter>
                </Col>
            </Row>
            <RouterProvider router={router}/>
            <footer className="py-5 text-light">
                <Container>
                    <Row>
                        <Col md={4} className="mb-4">
                            <img src={ForgeLogoHeader} alt="Forge Logo" className="mb-3" />
                            <div className="social-links">
                                <a href="https://www.instagram.com/forge.nu/" target="_blank" rel="noopener noreferrer">
                                    <img src={ig} alt="Instagram Icon" />
                                    forge.nu
                                </a>
                                <a href="https://www.linkedin.com/company/forgenu/" target="_blank" rel="noopener noreferrer">
                                    <img src={lin} alt="LinkedIn Icon" />
                                    www.linkedin.com/company/forgenu/
                                </a>
                                <a href="mailto:forgenortheastern@gmail.com">
                                    <img src={ml} alt="Gmail Icon" />
                                    forgenortheastern@gmail.com
                                </a>
                            </div>
                        </Col>
                        <Col md={4} className="mb-4">
                            <div className="subscribe-container">
                                <p>Subscribe to our newsletter!</p>
                                <div className="subscribe-container-wrapper">
                                    <input type="email" className="form-control mb-2" placeholder="Type email here..." />
                                    <button className="btn btn-primary">Subscribe</button>
                                </div>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="bar">
                                <Nav.Link style={{ color: "#BF5813", marginBottom: '10px' }} href="about">
                                    About
                                </Nav.Link>
                                <Nav.Link style={{ color: "#BF5813", marginBottom: '10px' }} href="teams">Teams</Nav.Link>
                                <Nav.Link style={{ color: "#BF5813", marginBottom: '10px' }} href="resources">Resources</Nav.Link>
                                <Nav.Link style={{ color: "#BF5813", marginBottom: '10px' }} href="past-projects">Past</Nav.Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </div>
    );
}

export default App;