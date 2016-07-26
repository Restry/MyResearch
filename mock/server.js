var jsonServer = require('json-server')
var server = jsonServer.create()
var router = jsonServer.router('db.json')
var middlewares = jsonServer.defaults()

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares)

// Add custom routes before JSON Server router 
request(server)
        .get('/posts')
        .set('Origin', 'http://example.com')
        .expect('Content-Type', /json/)
        .expect('Access-Control-Allow-Credentials', 'true')
        .expect('Access-Control-Allow-Origin', 'http://example.com')
        .expect(db.posts)
        .expect(200, done)

server.use(function (req, res, next) {
  if (req.method === 'POST') {
    req.body.createdAt = Date.now()
  }
  // Continue to JSON Server router
  next()
})

// Use default router
server.use(router)
server.listen(3000, function () {
  console.log('JSON Server is running')
})