import React, { Component } from 'react';
import {
  Container, Row, Col,
  Nav, NavItem, NavLink, Jumbotron, Card, Button, CardTitle, CardText,
} from 'reactstrap';
import '../style/custom.css'
// Portal components
import logoImage from '../logo.svg';


class Profile extends Component {
 
  constructor(props){
    super(props)
    this.state1 = {
      title: 'Hactiv8 Meetup',
      buttom: 'Join Us'
       
    }
    this.state2 = {
      title: 'Next Meetup',
    
       
    }
  }



 
  render() {
    
    return (
      <Container className="box">
        <Row>
          <Col className="menu" md="11" >
            <Nav>
              <NavItem>
                <NavLink href="#" className="putih">QTemu</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#" className="abu">Create Meetup</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#" className="abu">Explore</NavLink>
              </NavItem>
           
            </Nav>
          </Col>

           <Col className="menu" md="1" >
            <Nav>
            
              <NavItem className="right">
                <NavLink href="#" className="abu" >Login</NavLink>
              </NavItem>
            </Nav>
          </Col>
        </Row>
        
        <Row>
        <Jumbotron fluid className="profileBox">
          <Container fluid>
            <div className="photoBox"><img src={logoImage}  alt="logo" /></div>
            <div className="biodata">
              <h2 className="title">{this.state1.title}</h2>
              <Row>
          
              <Col xs="2">Location</Col>
               <Col xs="8">Jakarta Indonesia</Col> </Row>
               <Row> <Col xs="2">Member</Col>
               <Col xs="8">1,078</Col></Row>
               <Row> <Col xs="2">Organizers</Col>
               <Col xs="8">Adhy Wiranata</Col></Row>
               <p>  <Button className="buttonView">{this.state1.buttom}</Button> </p>
            </div>
          </Container>
        </Jumbotron>
        </Row>

        <Row>
          <h2 className="title">{this.state2.title}</h2>
          <Container fluid>
          <Jumbotron fluid className="profileBox">
          <Container fluid>
            
                <p>Awsome meetup an event</p>
                <p>25 January 2019</p>
                <p>Hello, JavaScript & Node.js Ninjas!</p>
                <p>Get ready for our montly meetup JakartaJS! This will be our fifth meetup of 2018!</p>
                <p>The meetup format will contain some short stories dan technical talks.</p>
                <p>If you have  a short announcement you'd like to share with the audience, you may do so during open mic annoucements</p>
                <p>Remember to bring a photo ID to get through buliding security</p>
                <p>.............</p>
                <p>See You There</p>
                <p>Best The Jakarta JS Organizers</p>
          </Container>
            
          </Jumbotron>
          </Container>
        </Row>
        <Row>
          <div className="biodata">
          <h2 className="title">Next Meetup</h2>
            <p>consectetur adipiscing elit. Mauris auctor, purus et porta commodo, urna sem blandit justo,</p>
            <p>Twiter:</p>
          </div>
        </Row>

        <Row>
          
          <div style={{width:'100%', margin:5 }}>
            <h2 className="title" style={{float:"left"}}>Members</h2>
            <p style={{float:"right"}}>See All</p>
          </div>
          <Container>

          <Row className="profileBox">
            <Col xs="1">
              <img src={logoImage}  alt="logo" />
            </Col>
            <Col xs="2">Organizers<br/>Adhy Wiranata</Col>
            <Col xs="1"><br/>4 Other</Col>
            <Col xs="6"></Col>
          </Row>
          </Container>

        </Row>

        <Row>
          <div style={{width:'100%', margin:5 }}>
            <h2 className="title" style={{float:"left"}}>Past Meetups</h2>
            <p style={{float:"right"}}>See All</p>
          </div>
          <Container>
            <Row>
            <Col sm="4">
              <Card body>
                <CardTitle className="titleCard">27 November 2017</CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                <Button className="buttonView">View</Button>
              </Card>
            </Col>
            <Col sm="4">
              <Card body>
                <CardTitle className="titleCard">27 November 2017</CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                <Button className="buttonView">View</Button>
              </Card>
            </Col>
            <Col sm="4">
              <Card body>
                <CardTitle className="titleCard">27 November 2017</CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                <Button className="buttonView">View</Button>
              </Card>
            </Col>
            </Row>
            <hr />
            <p style={{textAlign:"center"}}>Copyright Hacktiv8 2018</p>
          </Container>
        </Row>
   </Container>

    
    );
  }
}

export default Profile;
