import React, { Component } from 'react';
import styled from 'styled-components';

import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';

const GifListWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 25px;
  width: 80vw;
  margin: 0 auto;
`;

export default class GifListContainer extends Component {
  state = {
    searchTerm: 'dogs',
  };

  handleChange = e => {
    e.persist();
    this.setState({
      searchTerm: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.fetchGifs();
  };

  fetchGifs() {
    fetch(
      `http://api.giphy.com/v1/gifs/search?q=${this.state.searchTerm}&api_key=dc6zaTOxFJmzC&rating=g`,
    )
      .then(res => res.json())
      .then(({ data }) => {
        console.log(data);
        this.setState({ gifs: data });
      });
  }

  componentDidMount() {
    this.fetchGifs();
  }

  render() {
    return (
      <GifListWrapper>
        <GifSearch
          searchTerm={this.state.searchTerm}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <GifList gifs={this.state.gifs} />
      </GifListWrapper>
    );
  }
}
