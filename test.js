var test = require('prova');
var author = require("./");

test('returns author bio', function (t) {
  author('azerbike', function (error, author) {
    t.equal(author.name, "Azer Koçulu");
    t.ok(author.bio.indexOf("azer.bike") > -1);
    t.equal(author.username, 'azerbike');
    t.end();
  });
});

test('returns list of posts', function (t) {
  author('azerbike', function (error, author) {
    t.ok(author.posts);
    t.equal(author.posts[0].url, 'http://medium.com/p/' + author.posts[0].id);
    t.end();
  });
});
