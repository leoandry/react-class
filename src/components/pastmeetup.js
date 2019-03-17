import React, { Component } from 'react';
import {
  Container, Row, Col, Card, Button, CardTitle, CardText,
} from 'reactstrap';
import '../style/custom.css'


class Pastmeetup extends Component {
 
  constructor(props){
    super(props)
    this.state1 = {
      title: 'Past Meetups'
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
           
          </Container>
        </Row>

    
    );
  }
}

export default Pastmeetup;
