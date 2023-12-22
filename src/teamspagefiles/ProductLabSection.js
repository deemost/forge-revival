import { Button, Col, Row, Tab, Tabs } from "react-bootstrap";
import { useState } from "react";
import Team from "./Team";
import image1 from "../photos/Image_1.jpg";
import image2 from "../photos/NewImage2.png";
import image3 from "../photos/NewImage3.png";
import image4 from "../photos/NewImage4.png";

function ProductLabSection() {
    const [key, setKey] = useState("team1");

    const members1 = [[image1, "foo"], [image2, "foo"], [image3, "foo"], [image4, "foo"]];
    const members2 = [[image3, "foo"], [image4, "foo"], [image1, "foo"], [image2, "foo"]];
    const members3 = [[image4, "foo"], [image1, "foo"], [image3, "foo"], [image2, "foo"]];

    const renderTabContent = () => {
        switch (key) {
            case "team1":
                return <Team members={members1} />;
            case "team2":
                return <Team members={members2}/>;
            case "team3":
                return <Team members={members3}/>;
            default:
                return null;
        }
    };

    return (
        <div className="card-column">
            <Row>
                <Col sm={2}>
                    <h3>Product Lab</h3>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Tabs
                        id="controlled-tab-example"
                        activeKey={key}
                        onSelect={(k) => setKey(k)}
                        className="mb-3"
                    >
                        <Tab eventKey="team1" title="Team 1"></Tab>
                        <Tab eventKey="team2" title="Team 2"></Tab>
                        <Tab eventKey="team3" title="Team 3"></Tab>
                    </Tabs>

                    {renderTabContent()}

                </Col>
            </Row>
        </div>
    );
}

export default ProductLabSection;