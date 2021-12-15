import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
  Button,
} from 'react-bootstrap';
// import { items } from './dummy.js';
import Youtube from '../../assets/icons/youtube.svg';

import { Chrono } from "react-chrono";

import Timeline from "../../components/Explore/Timeline";

class ExploreCard extends Component {

  constructor(props) {
      super(props);
      this.state = {
        active: "0",
        activeBox: null,
      }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      active: "0",
    })
  }

  onItemSelected = (image_id) => {
    this.setState({
      active: image_id
    })
  }

  handleMouseEnter = (item) => {
    // console.log(item);
    this.setState({
      activeBox: item,

    })
  }

  handleMouseLeave = (item) => {
    this.setState({
      activeBox: null,

    })
  }

  render() {
    const { video } = this.props;
    // console.log(video);
    const activeItem = video.images.filter(item => item.image_id === this.state.active)[0];
    // var items = [];
    // video.images.forEach((image, i) => {
    //   items.push({
    //     key: image.id,
    //     image_id: image.image_id,
    //     title: image.time_stamp,
    //     cardDetailedText: "Sub-Activity: " + image.sub_activity,
    //     media: {
    //       type: "IMAGE",
    //       source: {
    //         url: image.url,
    //         type:"png"
    //       }
    //     },
    //   })
    // });

    return (
      <div className="explore-card">
        <Container>
          <Row>
            <Col md={{span: 6}}>
              <p className="explore-card-title"> Activity: {video.activity}
              <a href="https://www.youtube.com/watch?v=tllsl2NRXDI"><img className="explore-card-youtube" src={Youtube}/></a>
              </p>

              <div style={{ width: "550px", height: "700px" }}>
                <Timeline data={video.images} onClick={this.onItemSelected} activeItem={activeItem}/>
                <div>

                  {activeItem.entities ? activeItem.entities.map(ent => (
                    <div style={{
                      position: 'absolute',
                      borderColor: '#EEDCD0',
                      borderWidth: 'medium',
                      left: ent.left,
                      top: ent.top,
                      width: ent.width,
                      height: ent.height,
                      zIndex: '10',
                    }} className={this.state.activeBox && this.state.activeBox.includes(ent.text)? "explore-card-box-active" : ""}>
                    </div>
                  )) : null}

                </div>

              </div>
            </Col>
            <Col md={{span:2}}>
              <Row>
                <div className="explore-card-subtitle"> Entity </div>
              </Row>
              <Row>
                {activeItem.entities.map(ent => (
                  <p className="explore-card-text" onMouseEnter={() => this.handleMouseEnter([ent.text])} onMouseLeave={() => this.handleMouseLeave(ent.entity)}>
                    {ent.text}
                  </p>
                ))}
              </Row>
            </Col>
            <Col md={{span:2}}>
              <Row>
                <div className="explore-card-subtitle"> Attribute </div>
              </Row>
              <Row>
                {activeItem.attributes.map(att => (
                  <p className="explore-card-text" onMouseEnter={() => this.handleMouseEnter(att.entities)} onMouseLeave={() => this.handleMouseLeave(att.entity)}>
                      {att.text}
                  </p>
                ))}
              </Row>
            </Col>
            <Col md={{span:2}}>
              <Row>
                <div className="explore-card-subtitle"> Relationship </div>
              </Row>
              <Row>
                {activeItem.relationships.map(rel => (
                  <p className="explore-card-text" onMouseEnter={() => this.handleMouseEnter(rel.entities)} onMouseLeave={() => this.handleMouseLeave(rel.entity)}>
                     {rel.text}
                  </p>
                ))}
              </Row>
            </Col>


          </Row>
        </Container>

      </div>

    )
  }

}


export default ExploreCard;


// <Chrono
//   cardHeight={270}
//   items={items}
//   hideControls={true}
//   useReadMore={false}
//   cardPositionHorizontal="TOP"
//   theme={{
//     primary: "#474E5E",
//     secondary: "#DEE0E0",
//     cardForeColor: "#474E5E",
//     titleColor: "474E5E"
//   }}
//   onItemSelected={this.onItemSelected}
//   allowDynamicUpdate={true}
// />
