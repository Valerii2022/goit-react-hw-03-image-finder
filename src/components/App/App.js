import React, { Component } from 'react';
import { PixabayAPI } from 'services/pixabay-api';
import Notiflix from 'notiflix';
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
    loaderVisible: false,
    loadMoreBtn: false,
  };

  fetchPhotosFromApi = async query => {
    this.setState({ loaderVisible: true });
    try {
      const { data } = await pixabayApi.fetchPhotos(
        query,
        this.state.pageNumber
      );
      this.handleSuccessFetch(data, query);
    } catch (error) {
      Notiflix.Notify.failure(error);
    } finally {
      this.setState({ loaderVisible: false });
    }
  };

  handleSubmitForm = query => {
    this.setState(prevState => ({
      cards: [],
      pageNumber: 2,
      query: query,
    }));
    this.fetchPhotosFromApi(query);
  };

  handleLoadMoreBtnClick = query => {
    this.setState(prevState => ({
      query: query,
      pageNumber: prevState.pageNumber + 1,
    }));
    this.fetchPhotosFromApi(query);
  };

  handleSuccessFetch(data, query) {
    this.setState({ loadMoreBtn: true });
    if (data.totalHits === 0) {
      this.setState({ loadMoreBtn: false });
      Notiflix.Notify.failure(
        'Sorry, there are no images matching your search query. Please try again.'
      );

      return;
    }
    this.setState(prevState => ({
      loaderVisible: false,
      cards: [...prevState.cards, ...data.hits],
    }));
  }

  render() {
    return (
      <Container>
        <Searchbar handleSubmit={this.handleSubmitForm} />
        <ImageGallery cards={this.state.cards} />
        {this.state.loaderVisible && <Loader />}
        {this.state.loadMoreBtn && (
          <Button
            handleSubmit={this.handleLoadMoreBtnClick}
            query={this.state.query}
          />
        )}
      </Container>
    );
  }
}

export default App;
