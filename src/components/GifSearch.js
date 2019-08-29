import React, { Component } from 'react';

class GifSearch extends Component {
    state = {  }
    render() { 
        return (
            <form onSubmit={this.props.handleSubmit}>
                <input type="text" placeholder="search for..."
                        onChange={this.props.handleChange}>
                </input>
                <input type="submit"></input>
            </form>
        );
    }
}
 
export default GifSearch;