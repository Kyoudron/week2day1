var https = require('https');


function getAndPrintHTML () {

  var buffed = ''

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  https.get(requestOptions, function(response) {

    response.setEncoding('utf8');

    response.on('data', function(data) {
      var dataBuff = data.toString()
      buffed += dataBuff;

      // console.log('Chunk received.');
    });

    response.on('end', function() {
      console.log('Response stream complete.', buffed);
    });

  });

}

console.log(getAndPrintHTML())
