const http = require("http");
const url = require("url");
const fs = require("fs");
const server = http.createServer((req, res) => {
  if (req.url === "/index.html") {
    res.writeHead(200);
    const data = fs.readFileSync("./index.html", "utf-8");
    res.write(data);
    res.end();
  }
});

server.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
