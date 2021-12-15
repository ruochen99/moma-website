import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
  Button,
} from 'react-bootstrap';



class Timeline extends Component {

  constructor(props) {
      super(props);
      this.state = {
        // active: "0",
        data: props.data
      }
  }



  render() {
    const { data } = this.state;
    const { activeItem } = this.props;
    // console.log(data);
    // console.log(activeItem);
    // const activate = data.filter(item => item.image_id === this.state.active)[0]
    return(
      <div className="timeline">
          <p className="timeline-subtitle"> Sub-activity: {activeItem.sub_activity} </p>
          <div className="timeline-image-container">
            <img className="timeline-image" src={activeItem.url} />
          </div>
          <div className="timeline-circle-container">
            {data.map(image => (
              <div>
                <div className={image.image_id == activeItem.image_id ? "timeline-circle-active" :"timeline-circle"} md={{span:2}} onClick={() => this.props.onClick(image.image_id)}>
                </div>
                <p className="timeline-circle-text"> {image.time_stamp} </p>
              </div>
            ))}
          </div>
      </div>


    )
  }

}

export default Timeline;
