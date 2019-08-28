import React from 'react'


class GifList extends React.Component {

    renderLis = () => {
        debugger
      return this.props.gifs.map(gif => {return <li><img src={gif.images.original.url}></img></li>})
    }

    render(){
        return(
            <div className='row'>
                <div className='col'>
                    <ul>
                    {this.renderLis()}
                    </ul>
                </div>
            </div>
        )
    }


}



export default GifList