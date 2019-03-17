import React, { Component } from 'react';

import Menubar  from './components/menubar';
import Profile  from './components/profile';
import Nextmeetup  from './components/nextmeetup';
import Aboutmeetup  from './components/aboutmeetup';
import Member  from './components/member';
import Pastmeetup  from './components/pastmeetup';
import Footer  from './components/footer';
import {  Container} from 'reactstrap';



class App extends Component {

   
  
  render() {
    return (
      <Container className="box">
      <Menubar />
      <Profile />
      <Nextmeetup />
      <Aboutmeetup />
      <Member />
      <Pastmeetup />
      <Footer />
      </Container>
    );
  }
}

export default App;
