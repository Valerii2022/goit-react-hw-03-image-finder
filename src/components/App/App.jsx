import React, { Component } from 'react';
import { Container } from './styled';
import Searchbar from 'components/Searchbar';

class App extends Component {
  state = {};

  render() {
    return (
      <Container>
        <Searchbar />
      </Container>
    );
  }
}

export default App;
