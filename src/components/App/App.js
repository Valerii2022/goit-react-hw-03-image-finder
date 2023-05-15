import React, { Component } from 'react';
import { PixabayAPI } from 'services/pixabay-api';
import { Container } from './styled';
import Searchbar from 'components/Searchbar';
import ImageGallery from 'components/ImageGallery';
import Button from 'components/Button';
import Loader from 'components/Loader';

const pixabayApi = new PixabayAPI();

class App extends Component {
  state = {
    query: '',
    pageNumber: 1,
    cards: [],
    visible: false,
  };

  handleSubmitForm = async query => {
    try {
      const { data } = await pixabayApi.fetchPhotos(
        query,
        this.state.pageNumber
      );
      if (this.state.query === query) {
        this.setState(prevState => ({
          cards: [...prevState.cards, ...data.hits],
          query: query,
          pageNumber: prevState.pageNumber + 1,
        }));
      }
      if (this.state.query !== query) {
        this.setState(prevState => ({
          cards: data.hits,
          query: query,
          pageNumber: prevState.pageNumber + 1,
        }));
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <Container>
        <Searchbar handleSubmit={this.handleSubmitForm} />
        {this.state.visible && <Loader />}
        <ImageGallery cards={this.state.cards} />
        {this.state.query && (
          <Button
            handleSubmit={this.handleSubmitForm}
            query={this.state.query}
          />
        )}
      </Container>
    );
  }
}

export default App;
