const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcom to our homepage");
  } else if (req.url === "/about") {
    res.end("Here is our short history");
  } else
    res.end(`
  <h1>Ooops!</h1>
  <p>WE CANT PROVIDE THIS PAGE</p>
  <a href="/">Click here</a>
  `);
});

server.listen(5005);
