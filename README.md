# Meteor Articles (A vs. An)

Determines whether "a" or "an" should precede a word in English using the method described in [this stackoverflow response](http://stackoverflow.com/questions/1288291/how-can-i-correctly-prefix-a-word-with-a-and-an/1288473#1288473). The wikipedia-article-text dump provided by [Eamon Nerbonne](http://home.nerbonne.org/A-vs-An/) was used as the basis for the dataset, and this package is based off the NPM module [Articles](https://github.com/chadkirby/Articles) by @chadkirby.

## Installation

``` sh
meteor add jplatimer:articles
```

## Usage

``` javascript
findArticle('house'); // returns 'a'

articlize('apple'); // returns 'an apple'
```