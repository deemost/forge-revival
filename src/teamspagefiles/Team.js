import {Col, Image, Row} from "react-bootstrap";
import Card from "../cardstuff/Card";

function Team({members}) {
    return (
        <div>
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

export default Team;