var http = require('http');
var url = require('url');

var server = http.createServer(function(req, res) {
    var page = url.parse(req.url).pathname;
    console.log(page);
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.write('<!DOCTYPE html>'+
        '<html>'+
            ' <head>'+
                ' <meta charset="utf-8" />'+
                ' <title>Test</title>'+
            ' </head>'+ 
            ' <body>'+
                '<form action="" method="POST">'+
                  '<script' +
                    'src="https://checkout.stripe.com/checkout.js" class="stripe-button"' +
                    'data-key="pk_test_wIa11APpsu6sj1tVhSTuCk0J"' +
                    'data-amount="1500"' +
                    'data-name="Basic Plan"' +
                    'data-description="Basic plan ($1500)"' +
                    'data-image="http://d2jjzw81hqbuqv.cloudfront.net/assets/static/talkable-share-1024x512.jpg"' +
                    'data-locale="auto">' +
                  '</script>' +
                '</form>' +
            ' </body>'+
        '</html>');
    res.end();
});

server.listen(8080);
