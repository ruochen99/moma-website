import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';
import MomaImg from '../assets/img/moma.png';

class About extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    document.body.style.overflow = "hidden";
  }
  render() {
    return (
      <div className="about">
        <Container>
          <Row>
            <h1 className="about-title"> About </h1>
          </Row>
          <Row>
            <Col  md={5} xs={12}>
            The MOMA dataset is structured in a four-level hierarchy in terms of activity partonomy, with rich annotation at each level. As shown in the right figure, the activity dining service consists of multiple steps (i.e., sub-activities), including take an order, serve wine, serve food, and clean up the table. Further, the sub-activity taking an order also involves multiple entities. It consists of several actor-centric atomic actions: sit, talk to someone, write on something, etc. At the bottom level, we provide a dense annotation of actor-object relationships.

            </Col>
            <Col md={7} xs={12}>
              <img className="about-moma-img" src={MomaImg} alt="Moma img" />
            </Col>
          </Row>
        </Container>
      </div>

    )

  }
}


export default About;
