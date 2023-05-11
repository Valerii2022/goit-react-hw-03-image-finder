import React, { Component } from 'react';
import { Container } from './styled';
import Searchbar from 'components/Searchbar';
import ImageGallery from 'components/ImageGallery';
import Button from 'components/Button';

class App extends Component {
  state = {
    query: '',
    pageNumber: 1,
    cards: [],
  };

  handleSubmitForm = (data, query, page) => {
    try {
      this.setState(prevState => ({
        cards: [...prevState.cards, ...data],
        query: query,
        pageNumber: page,
      }));
    } catch (error) {}
  };

  render() {
    return (
      <Container>
        <Searchbar
          onSubmit={this.handleSubmitForm}
          page={this.state.pageNumber}
        />
        <ImageGallery cards={this.state.cards}></ImageGallery>
        <Button
          onSubmit={this.handleSubmitForm}
          page={this.state.pageNumber}
          query={this.state.query}
        />
      </Container>
    );
  }
}

export default App;
