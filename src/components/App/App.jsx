import React, { Component } from 'react';
import { Container } from './styled';
import Searchbar from 'components/Searchbar';
import ImageGallery from 'components/ImageGallery';

class App extends Component {
  state = {
    cards: [
      {
        id: 1,
        name: 'first',
        url: 'https://pixabay.com/get/gef6850b2275570e6e30e1feda528e9e097e485062b8d3905b470e95aeb018257ab252774aa529795ee2033c1d9b075253935e20445661e5279d50ea4266b5c94_640.jpg',
      },
      {
        id: 2,
        name: 'second',
        url: 'https://pixabay.com/get/gc60ffd6fcc657c114f19091826d778406d5f11e0130eb4abe8b9f97bcf6d65cc96edc24c8d7774c9a2d83512f55d8da2_640.jpg',
      },
      {
        id: 3,
        name: 'third',
        url: 'https://pixabay.com/get/gbf98fef83de02507687423b97941025335c7bf32af8ce008edb4a9f6ccba7287542583ea408e8ab16c6964ea252693aac3df251f53469d64383d3406c73b3ef2_640.jpg',
      },
    ],
  };

  render() {
    return (
      <Container>
        <Searchbar />
        <ImageGallery cards={this.state.cards}></ImageGallery>
      </Container>
    );
  }
}

export default App;
