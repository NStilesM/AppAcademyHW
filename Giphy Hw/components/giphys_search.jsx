import React from 'react';

import GiphysIndex from './giphys_index';


class GiphysSearch extends React.Component {
    constructor() {
        super();
        this.state = {searchTerm: 'poodle'}
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    componentDidMount() {
        this.props.fetchSearchGiphys('poodle')
    }

    handleChange(e) {
        this.setState({searchTerm: e.currentTarget.value})
    }
    handleSubmit(e) {
        e.preventDefault();
        let searchTerm = this.state.searchTerm.split(' ').join('+');
        this.props.fetchSearchGiphys(searchTerm)
    }
     render() {
        let {giphys} = this.props;
        return (
            <div>
                <form>
                <input value={this.state.searchTerm} onChange={this.handleChange} />
                <button type="submit" onClick={this.handleSubmit}>Search</button>
                </form>
                <GiphysIndex giphys={giphys} />
            </div>
        )
    }
}

export default GiphysSearch;