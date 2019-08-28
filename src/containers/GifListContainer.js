import React from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'


class GifListContainer extends React.Component {

    constructor(){
        super()
        this.state = {
            gifs: []
        }
    }

    // componentDidMount() {
    //     fetch('http://api.giphy.com/v1/gifs/api_key=dc6zaTOxFJmzC&rating=g').then(resp => resp.json()).then(data => console.log(data))
    // }

    newGif = (data) => {
        this.setState({
            gifs: data.data.slice(0, 3)
        })
        console.log(data.data.slice(0, 3))
    }

    getSearch = (query) => {
        
        fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`).then(resp => resp.json()).then(data => {console.log(data); this.newGif(data)})
       
    }

    renderGifLists = () => {
        debugger
        if(this.state.gifs.length > 0) {
            debugger
         return <GifList gifs={this.state.gifs}/> 
        }
    }


    render(){
        return(
            <div className='container'>
            <GifSearch getSearch={this.getSearch}/>
            {this.renderGifLists()}
            </div>
        )
    }


}



export default GifListContainer