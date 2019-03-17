import React, { Component } from 'react';
import {
  Container, Row,  Jumbotron
} from 'reactstrap';
import '../style/custom.css'


class Nextmeetup extends Component {
    constructor(props){
        super(props)
        this.state1 = {
          title: 'Next Meetup',
                    
        }
       
      }
 
  render() {
    
    return (
 
        <Row>
          <h2 className="title">{this.state1.title}</h2>
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
    
    );
  }
}

export default Nextmeetup;
