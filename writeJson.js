var fs = require('fs');
var body = "";
var scrape = require('./scrape');

var url = "https://www.federalregister.gov/articles/2014/11/10/2014-26146/medicare-and-medicaid-programs-hospital-outpatient-prospective-payment-and-ambulatory-surgical";

scrape(url, 'test.html');

var data = fs.readFileSync('./test.html', 'utf8');

var book = {
    "title" : "The Peoples E-Book",
    "cover" : "http://placekitten.com/600/800",
    "pages" : [{
      "title" : "PE-EPUB",
      "body" : data
    }]
  };


var outputFilename = './book.json';

fs.writeFileSync(outputFilename, JSON.stringify(book, null, 4));
console.log("JSON saved to " + outputFilename);
