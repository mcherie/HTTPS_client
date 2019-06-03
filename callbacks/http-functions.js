// var https = require('https'); 

module.exports = function getHTML (options, callback) {

    var https = require('https'); 

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
            callback(string);
            // console.log(string);
        });

    });

};


// function printHTML (html) {
//     console.log(html);
//   }
  

//   var requestOptions = {
//     host: 'sytantris.github.io',
//     path: '/http-examples/step4.html'
//   };

//   getHTML(requestOptions, printHTML)