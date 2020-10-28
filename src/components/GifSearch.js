import React from 'react'

class GifSearch extends React.Component {
    render(){
        this.props.fetchGif()
        return(
            <div>
           <input value={this.props.searchInput} 
           onChange={this.props.updateSearchInput}
           />
           </div>
        )
    }
}

export default GifSearch