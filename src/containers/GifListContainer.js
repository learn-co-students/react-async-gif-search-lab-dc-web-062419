import React from 'react'
import  GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'


class GifListContainer extends React.Component{

state = {
    gif: [],
    searchInput: 'dawg'
}

updateSearchInput = (event) => {
    this.setState({searchInput: event.target.value})
}


fetchGif = () => {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${this.state.searchInput}&api_key=dc6zaTOxFJmzC&rating=g`)
    .then(res => res.json())
    .then(gifArr => {
        this.setState({
            gif: gifArr.data.slice(0,3)    
        });
    })
}
render(){
    return(
        <div> 
        <GifSearch 
        searchInput={this.state.searchInput}
        updateSearchInput={this.updateSearchInput}
        fetchGif={this.fetchGif}
        />
        {this.state.gif.map(image => <GifList image={image} key={image.id}/>)}
        </div>
    )
}



componentDidMount(){
 this.fetchGif()
}




}

export default GifListContainer