import React, { Component } from 'react';
import Title from '../components/Landing/Title';
import Sponsors from '../components/Landing/Sponsors';
import Team from '../components/Landing/Team';
import Feature from '../components/Landing/Feature';


class Landing extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    document.body.style.overflow = "scroll";
  }

  render() {
    return (
      <div className="landing">
        <Title />
        <Feature />
        <Team />
      </div>


    )

  }
}


export default Landing;

// <Sponsors />
