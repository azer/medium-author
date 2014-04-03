## medium-author

Get a Medium author with list of posts. See also: [medium-post](http://github.com/azer/medium-post)

## Install

```bash
$ npm install medium-author
```

## Usage

```js
author = require('medium-author')

author('azerishere', function (error, azer) {

  author.name
  // => Azer Koçulu

  author.posts
  // => [{ title: "Çatışma Diyalektiği", url: "http://medium.com/p/329f78bddf89", snippet: "Dünya bir çatışma alanıdır." }, ...]

})
```
