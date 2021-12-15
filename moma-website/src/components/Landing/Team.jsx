import React, { PureComponent } from 'react';
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';
import Member from '../../assets/icons/member.svg';
import Alan from '../../assets/img/profiles/Alan-Luo.png';
import Chloe from '../../assets/img/profiles/Chloe-Liu.jpeg';
import Ehsan from '../../assets/img/profiles/Ehsan-Adeli.jpg';
import Emily from '../../assets/img/profiles/Emily-Jin.jpeg';
import Fei from '../../assets/img/profiles/Fei-Fei-Li.png';
import Juan from '../../assets/img/profiles/Juan-Carlos-Niebles.jpg';
import Kevin from '../../assets/img/profiles/Kevin-Chen.jpeg';
import Linden from '../../assets/img/profiles/Linden-Li.jpg';
import Michael from '../../assets/img/profiles/Michael-Cooper.jpg';
import Siddharth from '../../assets/img/profiles/Siddharth-Kapoor.jpeg';
import Tina from '../../assets/img/profiles/Tina-Li.jpg';
import Wanze from '../../assets/img/profiles/Wanze-Xie.png';
import Zhuoyi from '../../assets/img/profiles/Zhuoyi-Huang.jpg';
import Yiyun from '../../assets/img/profiles/Yiyun-Liang.jpeg';


class Team extends PureComponent {

  render() {
    let { students, faculty } = this.props;
    return (
        <div className="team">
          <Container className="team-container">
            <Row>
              <h3 className="team-title"> Our Team </h3>
            </Row>
            <Row>
              <h5 className="team-sub-title"> Faculty </h5>
            </Row>
            <Row>
            {faculty.map(member => (
              <Col md={3} className="team-card">
                <div className="headshot">
                  <img className="headshot-img" src={member.img} alt={member.name} />
                </div>
                <div className="name"> { member.name } </div>
                <div className="role">{ member.role }</div>
                <div className="org">{ member.org }</div>
              </Col>
            ))}
            </Row>
            <Row>
              <h5 className="team-sub-title"> Students </h5>
            </Row>
            {students.map(row => (
              <Row>
                {row.map(member => (
                  <Col md={3} className="team-card">
                    <div className="headshot">
                      <img className="headshot-img" src={member.img} alt={member.name} />
                    </div>
                    <div className="name"> { member.name } </div>
                    <div className="role">{ member.role }</div>
                    <div className="org">{ member.org }</div>
                  </Col>
                ))}
              </Row>
            ))}

          </Container>
        </div>
    )

  }

}

Team.defaultProps = {
  faculty: [
      {
         name: 'Fei-Fei Li',
         role: 'Professor',
         org: 'Stanford University',
         img: Fei,
      },
      {
         name: 'Ehsan Adeli',
         role: 'Assistant Professor',
         org: 'Stanford University',
         img: Ehsan,
      },
      {
         name: 'Juan Carlos',
         role: 'Adjunct Professor',
         org: 'Stanford University',
         img: Juan,
      },
    ],
  students: [
    [
      {
         name: 'Zelun (Alan) Luo',
         role: 'Graduate Student',
         org: 'Stanford University',
         img: Alan,
      },
      {
         name: 'Wanze Xie',
         role: 'Graduate Student',
         org: 'Stanford University',
         img: Wanze,
      },
      {
         name: 'Linden Li',
         role: 'Undergraduate Student',
         org: 'Stanford University',
         img: Linden,
      },
      {
         name: 'Bingxian (Kevin) Chen',
         role: 'Graduate Student',
         org: 'Stanford University',
         img: Kevin,
      },
    ],
    [{
         name: 'Emily Jin',
         role: 'Undergraduate Student',
         org: 'Stanford University',
         img: Emily,
      },
      {
         name: 'Ruochen (Chloe) Liu',
         role: 'Graduate Student',
         org: 'Stanford University',
         img: Chloe,
      },
      {
         name: 'Tina Li',
         role: 'Graduate Student',
         org: 'Stanford University',
         img: Tina,
      },
      {
         name: 'Zhuoyi Huang',
         role: 'Graduate Student',
         org: 'Stanford University',
         img: Zhuoyi,
      },
    ],
    [
      {
         name: 'Siddharth Kapoor',
         role: 'Graduate Student',
         org: 'Stanford University',
         img: Siddharth,
      },
      {
         name: 'Yiyun Liang',
         role: 'Graduate Student',
         org: 'Stanford University',
         img: Yiyun,
      },
      {
         name: 'Michael Cooper',
         role: 'Graduate Student',
         org: 'Stanford University',
         img: Michael,
      },
    ],

  ]

}

export default Team;
