import React from "react";

class GifList extends React.Component {
  render() {
    console.log(this.props.gifList);
    return (
      <div>
        {this.props.gifList.map(gif => (
          <li>
            <img key={gif.url} src={gif.url} alt="gif" />
          </li>
        ))}
      </div>
    );
  }
}

export default GifList;
