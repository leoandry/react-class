import React, { Component } from 'react';
import {
  Container, Row, Col} from 'reactstrap';
import '../style/custom.css'
// Portal components
import logoImage from '../logo.svg';


class Member extends Component {
 
  constructor(props){
    super(props)
    this.state1 = {
      title: 'Member'
       
    }
    
  }



 
  render() {
    
    return (
      
        <Row>
          
          <div style={{width:'100%', margin:5 }}>
            <h2 className="title" style={{float:"left"}}>{this.state1.title}</h2>
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

      
    
    );
  }
}

export default Member;
