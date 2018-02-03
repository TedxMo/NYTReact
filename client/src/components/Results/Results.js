import React, { Component } from 'react';
import Result from '../Result';
import './Results.css';

class Results extends Component {
  render() {
    console.log("Results render running...");
    return (
      <div className="panel panel-primary">
        <div className="panel-heading">
          <h3 className="panel-title"><strong>Results</strong></h3>
        </div>
        <div className="panel-body" id="results-div">
          {
            this.props.articles.map(article =>
              <Result
                key={article.headline.main}
                url={article.web_url}
                title={article.headline.main}
                snippet={article.snippet}
                articleObj={article}
              />
            )
          }
        </div>
      </div>
    )
  }
}

export default Results;
