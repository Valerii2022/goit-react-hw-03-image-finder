// import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { LoadMoreBtn } from './styled';
import { PixabayAPI } from 'services/pixabay-api';

const pixabayApi = new PixabayAPI();

class Button extends Component {
  handleSubmitBtn = async e => {
    const newPage = this.props.page + 1;
    try {
      const { data } = await pixabayApi.fetchPhotos(
        this.props.query,
        this.props.page
      );
      this.props.onSubmit(data.hits, this.props.query, newPage);
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <LoadMoreBtn onClick={this.handleSubmitBtn} type="button">
        Load more
      </LoadMoreBtn>
    );
  }
}

export default Button;
