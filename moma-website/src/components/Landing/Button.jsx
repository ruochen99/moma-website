import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Row,
  Col,
  ButtonToolbar,
} from 'react-bootstrap';

function Button(props) {
  return (
    <div className="landing-button">
      <Link to={props.to} style={{ textDecoration: 'none' }}>
        <img className="button-icon" src={props.logo} alt="About Logo" />
        <p className="button-text">{props.text}</p>
      </Link>

    </div>


  )

}

export default Button;
