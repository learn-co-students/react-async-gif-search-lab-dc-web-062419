import React from "react";




export default class GifList extends React.Component {
  

  



      

    render(){

    return (
        <div>
        <ul>
           <li>
               <img src={this.props.gif.images.original.url}></img>
           </li>
        </ul>
        </div>
    )

    }
};