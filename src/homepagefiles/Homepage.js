import Container from 'react-bootstrap/Container';
import {Button, Carousel, Col, Image, Row} from "react-bootstrap";

import HomePageSlideShow from "./HomepageSlideShow";
import ForgeLogo1 from "../photos/Forge Logo 1.svg";
import ForgeLogo2 from "../photos/Forge Logo 2.svg";
import ForgeLogo3 from "../photos/Forge Logo 3.svg";
import ForgeLogo4 from "../photos/Forge Logo 4.svg";
import AnimationHolder from "../photos/Animation holder.svg";
import Image6 from "../photos/Real Design System.svg";
import Image7 from "../photos/Real Design System On the Spot.svg";
import '../App.css';
import '../index.css';
import './Homepage.css';

export default function Homepage() {
    return (

        <Container fluid>




            <Row className="justify-content-center my-lg-2">
                <Col xs={8}>
                    <div style = {{"height": "15%", "width": "100%"}}></div>
                    <HomePageSlideShow></HomePageSlideShow>
                </Col>
            </Row>


            <Row className="my-lg-5">
                <Col sm={6}>
                    <div className="d-flex flex-column align-items-center justify-content-center">
                        <h1 className={"subheading-text"} style={{ color: '#EF8F42' }}>Who Are We?</h1>
                        <p className={"sembold-text"} style={{ maxWidth: '500px' }}>
                            Forge is a diverse, collaborative, and passionate product development community focused on teaching entrepreneurial
                            and engineering skills to empower the next generation of innovators.
                        </p>
                    </div>
                </Col>
                <Col sm={6} className="mt-lg-5"> {/* Add margin to the top */}
                    <div className="d-flex flex-column align-items-center justify-content-center">
                        <Image className={"thirdimage"} src={AnimationHolder} alt="Forge Logo 1" />
                    </div>
                </Col>
            </Row>


            <Row className="my-lg-5">
                <Col sm={6}>
                    <div className="d-flex flex-column align-items-center justify-content-center">
                        <Image className={"secondimage"} src={Image7}></Image>
                    </div>
                </Col>
                <Col sm={6}>
                    <div className="d-flex flex-column align-items-center justify-content-center">
                        <h1 className={"subheading-textYA"} style={{ color: '#EF8F42' }}>What Do We Do?</h1>
                        <p className={"sembold-text1"} style={{ maxWidth: '500px' }}>
                            Forge is a student-led initiative of the Sherman Center built to help
                            students learn about product development and entrepreneurship through
                            hands-on experience. As a part of Forge, students solve real-world
                            problems by developing products that make a lasting impact.
                        </p>
                        <Button
                            style={{
                                fontFamily: 'Jost, sans-serif',
                                width: '23%',
                                height: '10%',
                                display: 'flex',
                                justifyContent: 'center',
                                backgroundColor: '#A36086',
                                color: 'white',
                                border: 'none',
                                fontSize: "23px",
                            }}
                            href="about"
                            className={"learn-more"}
                        >
                            Learn More
                        </Button>
                    </div>
                </Col>
            </Row>


            <Row className="my-lg-5">
                <Col sm={4}>
                    <h1 className={"subheading-text1"} style={{ color: '#EF8F42' }}>Get Involved</h1>
                </Col>
            </Row>

            <Row className="my-lg-5">
                <Col className="d-flex justify-content-center">
                    <Carousel fade controls={false} indicators={false} autoPlay={false} interval={3000} >
                        <Image src={Image6} className="styled-image" alt="Your Image" fluid/>
                        <Carousel.Caption>
                            <div>
                                <h3 className={"imageslide"} >Applications are currently closed!  Check back in Spring 2024!</h3>
                            </div>
                            {/*<h1>Applications are currently closed!  Check back in Spring 2024!</h1>*/}
                        </Carousel.Caption>
                    </Carousel>
                </Col>
            </Row>




            <Row className="my-lg-5">
                <Col sm={5}>
                    <h1 className={"subheading-text3"} style={{ color: '#EF8F42' }}>Meet Our Teams</h1>
                </Col>
            </Row>


            <Row className="my-lg-5">
                <Col sm={3}>
                    <div className="d-flex flex-column align-items-center justify-content-center">
                        <Image src={ForgeLogo1} alt="Forge Logo 1" />
                        <h3 className="my-lg-3 fourforge1">Management</h3>
                        <p className={"fourge-text1 text-center"}>
                            Our management team is responsible for leading all of our teams.
                            They are tasked with supporting our members and running Forge.
                        </p>
                    </div>
                </Col>
                <Col sm={3}>
                    <div className="d-flex flex-column align-items-center justify-content-center">
                        <Image src={ForgeLogo2} alt="Forge Logo 2" />
                        <h3 className="my-lg-3 fourforge2">Product Lab</h3>
                        <p className={"fourge-text1 text-center"}>
                            The Product Lab is the most engaging element of Forge, providing a
                            meaningful project experience to its members. Each year, there are 3-5
                            Product Lab Teams who work through the product development process and
                            learn through hands-on experience.
                        </p>
                    </div>
                </Col>
                <Col sm={3}>
                    <div className="d-flex flex-column align-items-center justify-content-center">
                        <Image src={ForgeLogo3} alt="Forge Logo 3" />
                        <h3 className="my-lg-3 fourforge3 text-center">Community Engagement</h3>
                        <p className={"fourge-text text-center"}>
                            The Community Engagement team is responsible for making Forge a
                            welcoming place to grow and learn in a collaborative and interdisciplinary
                            environment. They run events, encourage community interaction, actively
                            implement and build upon our DEI Pledge, and maximize Forge's impact in
                            the Sherman Center and greater Northeastern community.
                        </p>
                    </div>
                </Col>
                <Col sm={3}>
                    <div className="d-flex flex-column align-items-center justify-content-center">
                        <Image src={ForgeLogo4} alt="Forge Logo 4" />
                        <h3 className="my-lg-3 fourforge4">Foundations</h3>
                        <p className={"fourge-text1 text-center"}>
                            The Foundations Team is responsible for providing mentorship for Product
                            Lab members. They are a team of senior engineers and skilled entrepreneurs
                            who run workshops and provide guidance to the Product Lab Teams throughout
                            the semester-long product development process.

                        </p>
                    </div>
                </Col>
            </Row>




            {/*<Row className="my-lg-n5">*/}
            {/*    <Col sm={6}>*/}
            {/*        <h3>Subscribe to the Newsletter!</h3>*/}
            {/*        <Form>*/}
            {/*            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">*/}
            {/*                <Form.Label>Email address</Form.Label>*/}
            {/*                <Form.Control type="email" placeholder="name@example.com"/>*/}
            {/*            </Form.Group>*/}
            {/*        </Form>*/}
            {/*    </Col>*/}
            {/*    <Col sm={6}>*/}
            {/*        <Image*/}
            {/*            src='https://cdn-icons-png.flaticon.com/512/87/87390.png'*/}
            {/*            style={{height: 50, width: 50}} className='mx-3'/>*/}
            {/*        <Image*/}
            {/*            src='https://familypaths.org/wp-content/uploads/2017/10/Logos-Linkedin-icon.png'*/}
            {/*            style={{height: 50, width: 50}} className='mx-3'/>*/}
            {/*        <Image*/}
            {/*            src='https://cdn-icons-png.flaticon.com/512/59/59439.png'*/}
            {/*            style={{height: 50, width: 50}} className='mx-3'/>*/}
            {/*    </Col>*/}
            {/*</Row>*/}
        </Container>
    )
}