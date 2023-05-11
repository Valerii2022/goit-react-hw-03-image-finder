import React, { Component } from 'react';
import { Container } from './styled';
import Searchbar from 'components/Searchbar';
import ImageGallery from 'components/ImageGallery';

class App extends Component {
  state = {};

  render() {
    return (
      <Container>
        <Searchbar />
        <ImageGallery></ImageGallery>
      </Container>
    );
  }
}

export default App;
