var getHTML = require('../step5module.js');


var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};

function printLowerCase (html) {
  console.log(html.toString().toLowerCase())

  /* Write your code here! */
}

console.log(getHTML(requestOptions, printLowerCase));