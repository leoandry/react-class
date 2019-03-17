import React, { Component } from 'react';
import { Row, Col,
  Nav, NavItem, NavLink} from 'reactstrap';
import '../style/custom.css'


class Menubar extends Component {
 
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
        

    
    );
  }
}

export default Menubar;
