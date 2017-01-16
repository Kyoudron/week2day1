
var https = require('https');


function getHTML (options, callback) {

  // buffed = ''

  https.get(options, function(response) {

    response.setEncoding('utf8');

    response.on('data', function(data) {
      console.log(callback(data))

    });

    response.on('end', function(options) {
      // console.log('Response stream complete.', buffed);
    });

  });
}



function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

console.log(getHTML(requestOptions, printHTML))
