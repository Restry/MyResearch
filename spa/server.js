var httpServer = require('http-server');

var server = httpServer.createServer({
    root: '/base/spa',
    robots: true,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true'
    }
});

server.listen(8004);

console.log('server listing on 8004');


