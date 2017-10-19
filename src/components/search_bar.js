import React, {Component} from 'react';

// make a new SearchBar class with functionality of a React Component
class SearchBar extends Component {

    //define the state of the component - only available to class based components
    //called whenever instance is created (like __init__)
    constructor(props) {
        super(props);

        this.state = { term: "" };
    }

    // every class component must have a render method
    render() {
        // return an input box with an arrow function
        return (
            <div className="search-bar">
                <input 
                    value = {this.state.term}
                    onChange={event => this.onInputChange(event.target.value)} placeholder="Search..." />
            </div>
        );
        // using a defined method
        //return <input onChange={this.onInputChange} placeholder="Search..." />

    }

    // event handler to listen for changes to input
    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term)
    }
}

export default SearchBar;