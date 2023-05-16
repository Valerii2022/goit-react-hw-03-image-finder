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

  fetchPhotosFromApi = async (query, pageNumber) => {
    this.setState({ loaderVisible: true });
    try {
      const { data } = await pixabayApi.fetchPhotos(query, pageNumber);
      this.handleSuccessFetch(data, query);
    } catch (error) {
      this.handleErrorFetch(error);
    } finally {
      this.setState({ loaderVisible: false });
    }
  };

  handleSubmitForm = (query, pageNumber) => {
    this.setState({
      cards: [],
      pageNumber,
      query,
      loadMoreBtn: false,
    });
    this.fetchPhotosFromApi(query, pageNumber);
  };

  handleLoadMoreBtnClick = query => {
    this.setState({
      query,
      loadMoreBtn: false,
    });
    this.fetchPhotosFromApi(query, this.state.pageNumber);
  };

  handleSuccessFetch(data, query) {
    if (data.totalHits === 0) {
      this.setState({ loadMoreBtn: false });
      Notiflix.Notify.failure(
        'Sorry, there are no images matching your search query. Please try again.'
      );

      return;
    }
    //   this.setState({ loadMoreBtn: true });
    this.setState(prevState => ({
      pageNumber: prevState.pageNumber + 1,
      loaderVisible: false,
      cards: [...prevState.cards, ...data.hits],
      loadMoreBtn: true,
    }));
  }

  handleErrorFetch(error) {
    Notiflix.Notify.failure(error.message);
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
