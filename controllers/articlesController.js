const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.Articles
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    let article = {
      title: req.body.headline.main,
      snippet: req.body.snippet,
      date: req.body.pub_date,
      url: req.body.web_url
    }
    console.log("article", article);
    db.Articles
      .create(article)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  delete: function(req, res) {
    console.log("req.params.id", req.params.id);
    db.Articles
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
}
