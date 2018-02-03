import React, { Component } from 'react';
import API from "../../utils/API";
import "./Result.css";

class Result extends Component {
  constructor(props) {
    super(props);
    this.handleSave = this.handleSave.bind(this);
  }

  handleSave(e) {
    e.preventDefault();
    API.saveArticle(this.props.articleObj)
      .then(res => console.log(res.data))
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <a href={this.props.url}>{this.props.title}</a>
          <button className="btn btn-primary" onClick={this.handleSave}>Save Article</button>
        </div>
        <div className="panel-body">{this.props.snippet}</div>
      </div>
    )
  }
}

export default Result;
