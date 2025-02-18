const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);

  const query = parsedUrl.query;

  if (query.name) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(`Hello, ${query.name}!`);
  } else {
    res.writeHead(400, { "Content-Type": "text/plain" });
    res.end(
      "Please provide a name in the query string. For example: /greet?name=name"
    );
  }
});

server.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
