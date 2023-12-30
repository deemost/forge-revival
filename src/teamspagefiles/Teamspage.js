import Container from "react-bootstrap/Container";
import {Col, Form, Image, Row} from "react-bootstrap";
import ProductLabSection from "./ProductLabSection";
import ManagementSection from "./ManagementSection";
import CommunitySection from "./CommunitySection";
import FoundationsSection from "./FoundationsSection";
// import '../index.css'
import './Teamspage.css'

function TeamsPage() {
    return (
        <Container fluid>
            <Row>
                <Col sm={2}>
                    <h1 className=''>Teams</h1>
                </Col>
            </Row>

            <Row className="justify-content-center">
                <Col className="justify-content-center">
                    <ManagementSection>
                    </ManagementSection>
                </Col>
            </Row>

            <Row className="justify-content-center">
                <Col>
                    <ProductLabSection>
                    </ProductLabSection>
                </Col>
            </Row>

            <Row className="justify-content-center">
                <Col>
                    <CommunitySection>
                    </CommunitySection>
                </Col>
            </Row>

            <Row className="justify-content-center">
                <Col>
                    <FoundationsSection>
                    </FoundationsSection>
                </Col>
            </Row>
        </Container>
    );
}

export default TeamsPage;