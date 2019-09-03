import React, {Component} from 'react' 
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch';


class GifListContainter extends Component {

    state={
        gifs : []
    }

    getImages = (searchTerm = "" ) => {

        
        // let theImages = []
        fetch(`http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(res => res.json())
        // .then(data => console.log(data.data.slice(0,3)))
        // .then(data => this.setState({gifs: data.data})) //this one works but is all 
        .then(data => this.setState({gifs: data.data.slice(0,3)}))
        // .then(data => data.data.map(entry => entry.url.....))
        // console.log("this is result of fetch", theImages)
        // return theImages 
        // return ['th', 'fett', 'erwwer']

    }

    componentDidMount() {
        this.getImages()
    }

    render () {
       
        return (
            <div>
            <GifSearch search={this.getImages}/>
            <GifList gifsInQ={this.state.gifs}/>
            </div>
        )
    }
}

export default GifListContainter