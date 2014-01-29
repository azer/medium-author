var author = require("./");

it('returns author bio', function(done){
  author('azerishere', function (error, author) {
    expect(author.name).to.equal("Azer Koçulu");
    expect(author.bio).to.contain("Anatolian");
    expect(author.username).to.equal('azerishere');
    done();
  });
});

it('returns list of posts', function(done){
  author('azerishere', function (error, author) {
    expect(author.posts).to.exist;
    expect(author.posts[0].url).to.equal('http://medium.com/p/' + author.posts[0].id);
    done();
  });
});
