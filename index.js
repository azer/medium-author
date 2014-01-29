var getJSON = require("get-json");

module.exports = author;

function author (username, callback) {
  var url = 'https://medium.com/@' + username + '/latest?format=json';

  getJSON(url, function (error, response) {
    if (error) return callback(error);

    var author;

    try {
      response = response.slice(16);
      author = JSON.parse(response).payload;
    } catch(err) {
      return callback(err);
    }

    var posts = author.posts.map(function (post) {
      return {
        id: post.id,
        title: post.title,
        url: 'http://medium.com/p/' + post.id,
        snippet: post.virtuals.draftSnippet || post.virtuals.snippet || ''
      };
    });

    var result = {
      id: author.value.id,
      name: author.value.name,
      bio: author.value.virtuals.bioHTML,
      username: author.value.username,
      posts: posts
    };

    callback(undefined, result);

  });
}
