import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
  Button
} from 'react-bootstrap';

class Download extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    document.body.style.overflow = "hidden";
  }

  downloadAnnotations = (e) => {
    e.preventDefault();
    window.open('https://drive.google.com/file/d/1YZtTgBBDU3pWj4BzrS5mfR29xzD3mGrh/view?usp=sharing');
  }

  render() {
    return (
      <div className="download">
        <Container>
          <Row>
            <h1 className="download-title"> Download </h1>
          </Row>
          <Row>
            <Col  md={5} xs={12}>
            <p className="download-text"> We provide the dataset annotations and a script to crawl videos below. Alternatively, if you're interested in the raw videos for research purposes please email momadataset@lists.stanford.edu.</p>
            </Col>
          </Row>
          <Row>
            <Col md={7} xs={12}>
              <Button variant="moma-primary" size="moma-lg" onClick={(e) => this.downloadAnnotations(e)} className="download-button"> Annotations </Button>
            </Col>
          </Row>

        </Container>
      </div>

    )

  }
}


export default Download;

// <Button variant="moma-primary" size="moma-lg" > Videos </Button>
