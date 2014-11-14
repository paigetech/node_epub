var Peepub   = require('pe-epub');
var fs = require('fs');


var epubJson = require('./book.json'); // see examples/example.json for the specs
var myPeepub = new Peepub(epubJson);

myPeepub.create('./test.epub')
  .then(function(filePath){
  console.log(filePath); // the same path to your epub file!
  });
