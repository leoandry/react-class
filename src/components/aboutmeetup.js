import React, { Component } from 'react';
import {Row} from 'reactstrap';
import '../style/custom.css'
// Portal components


class Aboutmeetup extends Component {
 
    constructor(props){
        super(props)
        this.state1 = {
          title: 'About Meetup',
                    
        }
       
      }
 
  render() {
    
    return (
      

        <Row>
          <div className="biodata">
          <h2 className="title">{this.state1.title}</h2>
            <p>Come and meet other developers interested in the JavaScript and it's library in the Greater Jakarta area.</p>
            <p>Twitter:@JakartaJS and we use the hashtag #jakartajs</p>
          </div>
        </Row>

    
    );
  }
}

export default Aboutmeetup;
