// import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Header, Form, SearchFormBtn, SearchFormInput } from './styled';
import { ReactComponent as SearchIcon } from '../../icons/search.svg';
import { PixabayAPI } from 'services/pixabay-api';

const pixabayApi = new PixabayAPI();

class Searchbar extends Component {
  state = {
    query: '',
  };

  handleSubmitForm = async e => {
    e.preventDefault();
    const newPage = this.props.page + 1;

    try {
      const { data } = await pixabayApi.fetchPhotos(
        this.state.query,
        this.props.page
      );
      this.props.onSubmit(data.hits, this.state.query, newPage);
    } catch (error) {
      console.log(error);
    }

    this.setState({ query: '' });
  };

  addQueryName = event => {
    this.setState({ query: event.target.value });
  };

  render() {
    return (
      <Header>
        <Form onSubmit={this.handleSubmitForm}>
          <SearchFormBtn type="submit" disabled={this.state.query === ''}>
            <SearchIcon width="30" height="30" />
          </SearchFormBtn>

          <SearchFormInput
            value={this.state.query}
            onChange={this.addQueryName}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </Form>
      </Header>
    );
  }
}

export default Searchbar;
