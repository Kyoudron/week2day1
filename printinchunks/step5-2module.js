var getHTML = require('./step5module.js');

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};


console.log(getHTML(requestOptions, printHTML))