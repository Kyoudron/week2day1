var getHTML = require('../step5module.js');


var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

function printReverse (html) {
  console.log(html.toString().split('').reverse().join(''));

  /* Write your code here! */
}

console.log(getHTML(requestOptions, printReverse));