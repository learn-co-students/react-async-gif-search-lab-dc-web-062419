import React from "react";

class GifSearch extends React.Component {
  constructor() {
    super();
    this.state = {
      query: ""
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.fetchGifs(this.state.query);
  };

  render() {
    return (
      <div className="ui action input">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Search..."
            value={this.state.query}
            onChange={event => this.setState({ query: event.target.value })}
          />
          <input type="submit" value="Find GIFs" />
        </form>
      </div>
    );
  }
}

export default GifSearch;
