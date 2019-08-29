import React from 'react'

export default class GifList extends React.Component{
    render(){
        return (
         <ul>
            { this.props.gifsData ? this.props.gifsData.map(gif =>
                 
                <li>
                    <div><img src={`${gif.images.original.url}`} alt="gifs"/></div>
                </li>
                
        ) : alert('Sorry, no GIFs found') }
         </ul>
        )
    }
}