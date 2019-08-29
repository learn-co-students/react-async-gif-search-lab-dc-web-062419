import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component{

    constructor(){
        super()
        this.state = {
            gifs: [],
            searchInput: ''
        }
    }
    
    submitHandler = (event) => {
        event.preventDefault()
        fetch(`http://api.giphy.com/v1/gifs/search?q=${this.state.searchInput}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
        .then(res => res.json())
        .then(dataArray => this.setState({
            gifs: dataArray['data']
        }))
    }

    inputChangeHandler = (event)=>{
        this.setState({
            searchInput: event.target.value
        })
    }

    render(){
        return (
        <div>
            < GifSearch 
                submitHandler={this.submitHandler} 
                searchInput={this.state.searchInput}
                inputChangeHandler={this.inputChangeHandler}
            />
            < GifList gifsData={this.state.gifs}/>
        </div>
        )
    }

    componentDidMount(){
       console.log('mounted')   
    }
}

export default GifListContainer
