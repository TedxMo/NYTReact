import React, { Component } from 'react';
import Header from '../../components/Header';
import Results from '../../components/Results';
import API from '../../utils/API';

class Search extends Component {
  constructor(props) {
    super(props);
    this.handleInput = this.handleInput.bind(this);
    this.runSearch = this.runSearch.bind(this);
    this.state = {
      searchTerm: "",
      articles: []
    }
  }

  handleInput(e) {
    this.setState({
      searchTerm: e.target.value
    });
  }

  runSearch(e) {
    e.preventDefault();
    API.articleSearch(this.state.searchTerm)
      .then(res => this.setState({ articles: res.data.response.docs }))
      .catch(err => console.error(err));
  }

  render() {
    console.log("Search render running...");
    return (
      <div className="container">
        <Header />
        <div className="row">
          <div className="col-sm-12">
            <br />
            <div className="panel panel-primary">
              <div className="panel-heading">
                <h3 className="panel-title"><strong>Search</strong></h3>
              </div>
              <div className="panel-body">
                <form>
                  <div className="form-group">
                    <label htmlFor="search">Search Term:</label>
                    <input className="form-control" id="searchTerm" type="text" onChange={this.handleInput} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="start-year">Start Year:</label>
                    <input className="form-control" id="startDate" type="text" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="end-year">End Year:</label>
                    <input className="form-control" id="endDate" type="text" />
                  </div>
                  <button type="submit" className="btn btn-default" id="runSearch" onClick={this.runSearch}>Search</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <Results articles={this.state.articles} />
      </div>
    )
  }
}

export default Search;
