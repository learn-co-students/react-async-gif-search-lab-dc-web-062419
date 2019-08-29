import React, { Component } from 'react';

class GifList extends Component {
    state = {  }
    render() { 
        return (
            <ul>
                {this.props.gifs.map(gif => 
                    <li key={gif.slug}><img src={gif.images.original.url} alt={gif.slug} /></li>
                )}
            </ul>
        )
    }
}
 
export default GifList;