var https = require('https');


module.exports = function getHTML (options, callback) {


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


