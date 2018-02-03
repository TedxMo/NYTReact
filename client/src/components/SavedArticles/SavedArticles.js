import React, { Component } from 'react';
import SavedArticle from '../SavedArticle';
import './SavedArticles.css';

class SavedArticles extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-sm-12">
          <br />
          <div className="panel panel-primary">
            <div className="panel-heading">
              <h3 className="panel-title"><strong>Saved Articles</strong></h3>
            </div>
            <div className="panel-body" id="saved-articles-div">
              {
                this.props.savedArticles.map((article) => {
                  return <SavedArticle
                    key={article._id}
                    id={article._id}
                    url={article.url}
                    title={article.title}
                    snippet={article.snippet}
                    date={article.date}
                  />
                })
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SavedArticles;
