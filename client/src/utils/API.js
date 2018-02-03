import axios from 'axios';

export default {
  articleSearch: function(query) {
    let url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    return axios.get(`${url}?q=${query}&api-key=bbad9ec7412f45fab727b22a1c0aac94`)
  },
  getArticles: function() {
    return axios.get("/api/articles");
  },
  saveArticle: function(articleData) {
    return axios.post(`/api/articles`, articleData);
  },
  deleteArticle: function(id) {
    return axios.delete(`/api/articles/${id}`);
  }
}
