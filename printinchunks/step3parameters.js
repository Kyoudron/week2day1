
var https = require('https');


function getAndPrintHTML(options) {

  var buffed = ''

  /* Add your code here */
  https.get(options, function(response) {

    response.setEncoding('utf8');

    response.on('data', function(data) {
      var dataBuff = data.toString()
      buffed += dataBuff;

    });

    response.on('end', function(options) {
      console.log('Response stream complete.', buffed);
    });

  });

}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

console.log(getAndPrintHTML(requestOptions))