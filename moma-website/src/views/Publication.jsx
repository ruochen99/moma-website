import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
  Button
} from 'react-bootstrap';
import MomaPubImg from '../assets/img/moma-publication.png';

class Publication extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    document.body.style.overflow = "hidden";
  }

  downloadPublications = (e) => {
    e.preventDefault();
    window.open('https://proceedings.neurips.cc/paper/2021/hash/95688ba636a4720a85b3634acfec8cdd-Abstract.html');
  }

  render() {
    return (
      <div className="publication">
        <Container>
          <Row>
            <h1 className="publication-title"> Publication </h1>
          </Row>
          <Row>
            <Col md={{ span: 3, order: 1}}>
              <img className="publication-moma-img" src={MomaPubImg} alt="moma-publication" />
            </Col>
            <Col md={{ span: 7, order: 2}}>
              <p className="publication-moma-title"> MOMA: Multi-Object Multi-Actor Activity Parsing </p>
              <p className="publication-moma-author">
                Zelun Luo*, Wanze Xie*, Siddharth Kapoor, Yiyun Liang, Michael Cooper,
                Juan Carlos Niebles, Ehsan Adeli, Li Fei-Fei
              </p>
              <Button variant="moma-primary" size="moma-lg" onClick={(e) => this.downloadPublications(e)} className="publication-button"> View Paper </Button>
            </Col>
          </Row>
          <Row>
          </Row>

      </Container>

      </div>

    )

  }
}


export default Publication;
