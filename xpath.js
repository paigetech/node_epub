var xpath = require('xpath');
var dom = require('xmldom').DOMParser;
var fs = require('fs');
var cheerio = require('cheerio');


var data = fs.readFileSync('./test.html', 'utf8');

//module.exports = 
var doit = function(selector, html, err) {
  if(err) throw err;
  doc = cheerio.load(html);
  var selected = doc(selector);
//  fs.writeFileSync('xpath.html', selected, 'utf8');
  console.log("this is the selected: " + selected);
};

var selectThis = '#content_area';

doit(selectThis, data);

