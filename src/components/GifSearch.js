import React from 'react'

class GifSearch extends React.Component{

    state = {searchTerm: ''}

        changeHandler=(event) => {
            // console.log(this.props)
            this.setState({searchTerm: event.target.value})
            this.props.search(this.state.searchTerm)
        }
   
       render (){
       return <input type="text" name="searchField" value={this.state.searchTerm} onChange={this.changeHandler}></input>
         }

}

export default GifSearch