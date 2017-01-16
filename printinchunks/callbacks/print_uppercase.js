var getHTML = require('../step5module.js');


var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

function printUpperCase (html) {
  console.log(html.toString().toUpperCase())

  /* Write your code here! */
}

console.log(getHTML(requestOptions, printUpperCase));

