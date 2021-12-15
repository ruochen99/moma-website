import React, { PureComponent } from 'react';
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';
import Logo from '../../assets/icons/logo.svg';

function Sponsors() {
    return (
      <div className="sponsors">
        <Container className="sponsors-container">
          <Row>
            <h3 className="sponsors-title"> Sponsors </h3>
          </Row>
          <Row>
            <Col md={4}> <img src={Logo} alt="sponsors-logo" /></Col>
            <Col md={4}> <img src={Logo} alt="sponsors-logo" /></Col>
            <Col md={4}> <img src={Logo} alt="sponsors-logo" /></Col>
          </Row>

        </Container>
      </div>
    )
}

export default Sponsors;
