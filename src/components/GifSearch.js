import React from "react";




export default class GifSearch extends React.Component {
  



      

    render(){

    return (
        // <form onSubmit={this.props.submitHandle}>
        <input value={this.props.searchInput} onChange={this.props.changeInput}></input>
        //  <button>Submit</button>
        // </form>   
    )

    }
};