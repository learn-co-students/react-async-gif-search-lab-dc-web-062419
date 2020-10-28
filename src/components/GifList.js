import React from 'react'


class GifList extends React.Component {
    render(){
    return(
        <ul>
            <li>
                <img src={this.props.image.images.original.url}/>
            </li>      
        </ul>   
    )
    }
}

export default GifList