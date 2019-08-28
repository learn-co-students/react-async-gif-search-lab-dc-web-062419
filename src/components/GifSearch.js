import React from 'react'


class GifList extends React.Component {

    constructor(){
        super()
        this.state = {
            search: ''
        }
    }

    typeSearch = (e) => {
        let newSearch = e.target.value
        this.setState({
            search: newSearch
        })
    }

    handleSubmit = (e) => {
       
        this.props.getSearch(this.state.search)
    }

    render(){
        return(
            <div className='row'>
                <div className='col'>
                    <label>Enter a Search Term:</label><br></br>
                    <input name='search' value={this.state.search} onChange={(e) => this.typeSearch(e)}></input><br></br>
                    <button className="btn btn-success" onClick={(e) => this.handleSubmit(e)}>Find Gifs</button>
                </div>
            </div>
        )
    }


}



export default GifList