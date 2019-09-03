import React from 'react'


const GifList = (props) => {

   console.log(props.gifsInQ)


    return(
        <div>
              {props.gifsInQ.map(gif =>  <img src={gif.images.original.url} />)} </div>
    )

}

export default GifList