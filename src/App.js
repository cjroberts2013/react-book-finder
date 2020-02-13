import React, { Component } from 'react';
import './App.css';
import Search from "./Components/Search"
import Books from "./Components/Books"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      loading: false,
      found: []
    };
    this.counter = 0;
  }
  handleChange(e) {
    this.setState({
      query: e.target.value
    })
  }
  handleClick() {
    const { query } = this.state;
    if (!query) return;
    this.setState({
      loading: true
    });
    fetchBooks(query)
      .then((found) => {
        this.setState({ found, loading: false });
      })
  }
  handleClear() {
    this.setState({
      query: '',
      found: []
    })
  }

  render() {
    return (
      <div id="wrapper">
        <header>
          <h1>Book Locator</h1>
        </header>
        <div id="search">
          <Search
            onChange={(e) => this.handleChange}
            query={this.state.query}
            onClick={() => this.handleClick}
            onClear={() => this.handleClear}
          />
        </div>
        <div id="books">
          <Books volumes={this.state.found} loading={this.state.loading} />
        </div>
      </div>
    );
  }

}

export default App;
