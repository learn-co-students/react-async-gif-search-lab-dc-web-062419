import React from "react";
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

// import NavBar from "./NavBar";

// the App component should render out the GifListContainer component

export default class GifListContainer extends React.Component {
  
    state = {
        gifList: [],
        searchInput: ""
    }
  


    submitHandle = () => {
        let url = `http://api.giphy.com/v1/gifs/search?q=${this.state.searchInput}&api_key=dc6zaTOxFJmzC&rating=g`
        
        fetch(url)
        .then(res => res.json())
        .then(res => {
            this.setState({gifList: res.data.slice(0,3)})
        }).catch(res => {
            setTimeout(this.submitHandle, 1000)
        })
    }

    changeInput = event =>{
        this.setState({searchInput: event.target.value})
       if(event.target.value.length > 1){
          this.submitHandle()
       }
    }

    componentDidMount(){
        this.submitHandle()
      }

    render(){
    return (
        <div>
            <GifSearch searchInput={this.state.searchInput} changeInput={this.changeInput}/>
            <div>{this.state.gifList.map(gif => <GifList gif={gif} key={gif.id}/> )}</div>
        </div>
    )

    }
};


