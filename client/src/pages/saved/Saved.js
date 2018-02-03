import React, { Component } from 'react';
import Header from '../../components/Header';
import SavedArticles from '../../components/SavedArticles';
import API from '../../utils/API';

class Saved extends Component {
  constructor(props) {
    super(props);
    this.state = {
      savedArticles: []
    }
  }

  componentWillReceiveProps() {
    API.getArticles()
      .then((res) => {
        console.log(res.data);
        this.setState({ savedArticles: res.data });
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div className="container">
        <Header />
        <SavedArticles savedArticles={this.state.savedArticles}/>
      </div>
    )
  }
}

export default Saved;
