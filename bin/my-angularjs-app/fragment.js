const http = require('http')
const url = require('url')
const fs = require('fs')
const PORT = process.env.PORT || 3031;

const server = http.createServer((req, res) => {
  const pathname = url.parse(req.url).pathname;
  let filepath = __dirname + pathname;

  const jsHeader = { 
    'Content-Type': 'application/javascript',
    'Access-Control-Allow-Origin': '*'
   }
  
  switch(pathname) {
    case '/dist/my-angularjs-app.bundle.js':
      res.writeHead(200, jsHeader)
      return fs.createReadStream(filepath).pipe(res)
    // case '/index':
    //   filepath = filepath.replace(/\/index/i, '/dist/index.html');
    //   res.writeHead(200, {'Content-Type': 'text/html'})
    //   return fs.createReadStream(filepath).pipe(res)
    default:
      console.log("Inside default")
      res.writeHead(200, {
        'Content-Type': 'text/html',
        'Link': `<http://localhost:3031/dist/index.html>; rel="fragment-script"
        <http://localhost:3031/dist/my-angularjs-app.bundle.js>; rel="fragment-script"`
      })
      
      console.log("Response: "+ res);
      return res.end('')
  }
  
});



server.listen(3031, () => {
  console.log(`fragment server is waiting on port ${PORT}`)
})