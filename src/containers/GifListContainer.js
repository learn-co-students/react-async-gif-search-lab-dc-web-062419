import React from "react";
import GifList from "../components/GifList";
import GifSearch from "../components/GifSearch";

class GifListContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      gifList: []
    };
  }

  render() {
    return (
      <div>
        <GifSearch fetchGifs={this.fetchGifs} />
        <br></br>
        <GifList gifList={this.state.gifList} />
      </div>
    );
  }

  fetchGifs = (query = "dolphins") => {
    fetch(
      `http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`
    )
      .then(res => res.json())
      .then(({ data }) =>
        this.setState({
          gifList: data.map(gif => ({ url: gif.images.original.url }))
        })
      );
  };

  componentDidMount() {
    this.fetchGifs();
  }
}

export default GifListContainer;
