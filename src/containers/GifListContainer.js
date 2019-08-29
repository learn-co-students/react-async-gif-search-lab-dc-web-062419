import React, { Component } from 'react';
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';

class GiftListContainer extends Component {
    state = {query: "", gifs: []}
    
    fetchGifs = () => {
        const URL = (
            "http://api.giphy.com/v1/gifs/search?q=" + 
            this.state.query.replace(/ /g,"%20") +
            "&api_key=dc6zaTOxFJmzC&rating=g"
        )
        fetch(URL)
            .then(resp => resp.json())
            // .then(gifArray => console.log({gifs: gifArray.data.slice(0,3)}))
            .then(gifArray => this.setState({gifs: gifArray.data.slice(0,3)}))
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.setState({query: this.state.query},this.fetchGifs)
    }

    handleChange = (event) => {
        this.setState({query: event.target.value})
    }

    render() { 
        return (
            <div>
                <GifSearch 
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit} 
                />
                <GifList 
                    gifs={this.state.gifs}
                />
            </div>
        );
    }
}
 
export default GiftListContainer;