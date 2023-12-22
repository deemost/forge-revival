import {Button, Col, Row, Tab, Tabs} from "react-bootstrap";
import {useState} from "react";
import Container from "react-bootstrap/Container";
import image1 from '../photos/Image_1.jpg'
import image2 from '../photos/NewImage2.png'
import image3 from '../photos/NewImage3.png'
import image4 from '../photos/NewImage4.png'
import Card from "../cardstuff/Card";
import './Teamspage.css';

function CommunitySection() {

    const members = [[image1, "foo"], [image2, "foo"], [image3, "foo"], [image4, "foo"]];

    return (
        <div className="card-column">
            <Row>
                <Col sm={2}>
                    <h3>Community</h3>
                </Col>
            </Row>


            <Row className={'card-row-margin'}>
                {members.map((member) => {
                    return <Col sm={3}>
                        <Card image={member[0]} text={member[1]}></Card>
                    </Col>
                } )}
            </Row>



            <Row className={'card-row-margin'}>
                {members.map((member) => {
                    return <Col sm={3}>
                        <Card image={member[0]} text={member[1]}></Card>
                    </Col>
                } )}
            </Row>


        </div>
    );
}

export default CommunitySection;