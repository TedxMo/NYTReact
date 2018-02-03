import React, { Component } from 'react';
import API from '../../utils/API';

class SavedArticle extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(e) {
    e.preventDefault();
    console.log(this.props);
    API.deleteArticle(this.props.id)
      .then(res => console.log("Article deleted"))
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <a href={this.props.url}>{this.props.title}</a>
          <button className="btn btn-danger" onClick={this.handleDelete}>Delete Article</button>
        </div>
        <div className="panel-body">{this.props.snippet}</div>
      </div>
    )
  }
}

export default SavedArticle;
