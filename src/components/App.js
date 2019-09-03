import React from 'react'

import NavBar from './NavBar'
import GifListContainer from  '../containers/GifListContainer'

// const API = `http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`


// the App component should render out the GifListContainer component 

const App = () => {
  return (
    <div>
        < NavBar color='black' title="Giphy Search" />
        < GifListContainer />
    </div>
  )
}

export default App
