import React, { Component } from 'react';
import {
  Container, Row, Col,  Jumbotron,  Button
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
       
      }
  render() {
    
    return (
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

 
    );
  }
}

export default Profile;
