import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';
import Button from './Button';
import AboutLogo from '../../assets/icons/AboutLogo.svg';
import DownloadLogo from '../../assets/icons/DownloadLogo.svg';
import PublicationLogo from '../../assets/icons/PublicationLogo.svg';
import ExploreLogo from '../../assets/icons/ExploreLogo.svg';
import Overlay from '../../assets/img/overlay.jpeg';

function Title() {

    return (
        <div className="title">
         <img className="title-img" src={Overlay} />
          <Container className="title-container">

            <Row>
              <Col> <h1>
                      <span className="title-first-char">M</span>ulti-<span className="title-first-char">O</span>bject
                      <span className="title-first-char"> M</span>ulti-<span className="title-first-char">A</span>ctor
                    </h1>
              </Col>
            </Row>
            <Row>
              <Col> <p className="sub-heading"> The first benchmark and dataset dedicated to activity parsing </p> </Col>
            </Row>
            <Row>
              <Col> <Button text="About" logo={AboutLogo} to="/about" /> </Col>
              <Col> <Button text="Download" logo={DownloadLogo} to="/download" /> </Col>
              <Col> <Button text="Publication" logo={PublicationLogo} to="/publication" /> </Col>
              <Col> <Button text="Explore" logo={ExploreLogo} to="/explore" /> </Col>
            </Row>

          </Container>
        </div>

    )
}

export default Title;


// <img className="title-img" src={Overlay} />
