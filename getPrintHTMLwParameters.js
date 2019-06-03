function getAndPrintHTML (options) {

    var https = require('https'); 
    // var requestOptions = {
    //   host: 'sytantris.github.io',
    //   path: '/http-examples/step2.html'
    // };


    https.get(options, function (response) {

        response.setEncoding('utf8');
        let string = "";
        response.on('data', function (data) {
            let part = data.toString();
            // console.log(part);
            string += part;
            // console.log('stream data ', + part);
        });

        
        response.on('end', function() {
            console.log(string);
        });

    });
  
  }
  
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step3.html'
  };

  getAndPrintHTML(requestOptions)
