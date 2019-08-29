import React from 'react'

const GifSearch = (props) => {
    return (
        <div>
            <form onSubmit={props.submitHandler}>
            <label />Get you three special GIFs, 
                enter a search term:
            <input  value={props.searchInput}
                    onChange={props.inputChangeHandler} />
            <button>Find GIFs</button>
            </form>
        </div>
    )
}

export default GifSearch