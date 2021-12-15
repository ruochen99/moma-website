import React, { PureComponent } from 'react';
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';

function Feature() {
  return(
    <div className="feature">
      <Container className="feature-container">
        <Row>
          <h3 className="feature-title"> Dataset Statistics </h3>
        </Row>
        <Row>
          <Col md={4}>
            <div className="feature-number"> 373 </div>
            <div className="feature-text"> raw videos at activity level </div>
          </Col>
          <Col md={4}>
            <div className="feature-number"> 2364 </div>
            <div className="feature-text"> trimmed videos at sub-activity level </div>
          </Col>
          <Col md={4}>
            <div className="feature-number"> 12057 </div>
            <div className="feature-text"> atomic action instances </div>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <div className="feature-number"> 38K </div>
            <div className="feature-text"> annotated frames </div>
          </Col>
          <Col md={4}>
            <div className="feature-number"> 164K </div>
            <div className="feature-text"> character/object instances of 20
            actor classes and 120 object classes</div>
          </Col>
          <Col md={4}>
            <div className="feature-number"> 4.39 </div>
            <div className="feature-text"> actors/objects per frame</div>
          </Col>
        </Row>

      </Container>
    </div>
  )
}

export default Feature;
