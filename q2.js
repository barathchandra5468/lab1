const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200);
    res.write("This is home page");
    res.end();
  }
  if (req.url === "/home") {
    res.writeHead(200);
    res.write("This is home page");
    res.end();
  } else {
    res.writeHead(200);
    res.write("wep page not found");
    res.end();
  }
  if (req.url === "/about") {
    res.writeHead(200);
    res.write("This is about page");
    res.end();
  } else {
    res.writeHead(200);
    res.write("wep page not found");
    res.end();
  }
});

server.listen(3000);
