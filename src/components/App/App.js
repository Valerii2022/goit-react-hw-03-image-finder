import React, { Component } from 'react';
import { Container } from './styled';
import Searchbar from 'components/Searchbar';
import ImageGallery from 'components/ImageGallery';

class App extends Component {
  state = {
    cards: [],
  };

  handleSubmitForm = data => {
    try {
      this.setState({
        cards: data,
      });
    } catch (error) {}
  };

  render() {
    return (
      <Container>
        <Searchbar onSubmit={this.handleSubmitForm} />
        <ImageGallery cards={this.state.cards}></ImageGallery>
      </Container>
    );
  }
}

export default App;
