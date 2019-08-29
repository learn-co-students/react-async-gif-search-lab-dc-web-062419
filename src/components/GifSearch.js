import React from "react";




export default class GifSearch extends React.Component {
  



    /* // <form onSubmit={this.props.submitHandle}> */
    /* //  <button>Submit</button>
    // </form>   */
      

    render(){

    return (
        <div>
        <input value={this.props.searchInput} onChange={this.props.changeInput}></input>
        </div> 
    )

    }
};