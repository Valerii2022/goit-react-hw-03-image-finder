import React, { Component } from 'react';
import { Container } from './styled';
import Searchbar from 'components/Searchbar';
import ImageGallery from 'components/ImageGallery';
import Button from 'components/Button';
import Loader from 'components/Loader';

class App extends Component {
  state = {
    query: '',
    pageNumber: 1,
    cards: [],
    visible: false,
  };

  handleSubmitForm = (data, query, page) => {
    if (this.state.query === query || this.state.pageNumber === 1) {
      try {
        this.setState(prevState => ({
          cards: [...prevState.cards, ...data],
          query: query,
          pageNumber: page,
        }));
      } catch (error) {}
    }
    if (this.state.query !== query) {
      try {
        this.setState(prevState => ({
          cards: data,
          query: query,
          pageNumber: 1,
        }));
      } catch (error) {}
    }
  };

  render() {
    return (
      <Container>
        <Searchbar
          onSubmit={this.handleSubmitForm}
          page={this.state.pageNumber}
        />
        {this.state.visible && <Loader />}
        <ImageGallery cards={this.state.cards}></ImageGallery>
        {this.state.query && (
          <Button
            onSubmit={this.handleSubmitForm}
            page={this.state.pageNumber}
            query={this.state.query}
          />
        )}
      </Container>
    );
  }
}

export default App;
