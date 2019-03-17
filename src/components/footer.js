import React, { Component } from 'react';
import {Row, Container
} from 'reactstrap';


class Footer extends Component {

  render() {
    
    return (
        <Row>
        <Container>
        
            <hr />
            <p style={{textAlign:"center"}}>Copyright Hacktiv8 2018</p>
        
       
        </Container>
        </Row>

    
    );
  }
}

export default Footer;
